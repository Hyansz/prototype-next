require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const updateTodo = async (id, todoName, status) => {
    try {
        const result = await sql`
            UPDATE todos_ppqita
            SET todo = ${todoName}, status = ${status}
            WHERE id = ${id}
            RETURNING *;
        `;
        return result;
    } catch (error) {
        console.error('Error fetching todos:', error.message);
        return null;
    }
}

updateTodo(1, 'Completed Project', 1).then(console.log)