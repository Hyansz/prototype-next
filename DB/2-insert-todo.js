require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const insertTodo = async (todoName, createdAt, status = 0) => {
    try {
        const result = await sql`
            INSERT INTO todos_ppqita (todo, created_at, status)
            VALUES (${todoName}, ${createdAt}, ${status})
            RETURNING *;
        `;
        console.log('Todo inserted successfully:', result);
        return result;
    } catch (error) {
        console.error('Error inserting todo:', error.message);
        return null;
    }
}

insertTodo('Complete project', new Date())