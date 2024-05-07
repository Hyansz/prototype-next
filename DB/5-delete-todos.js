require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const deleteTodoById = async (id) => {
    try {    
        const result = await sql`
        DELETE FROM todos_ppqita
        WHERE id = ${id}
        RETURNING *
        `;
        return result;
    } catch (error) {
        console.error('Error fetching todos:', error.message);
        return null;
    }
};

deleteTodoById(1).then(console.log);
