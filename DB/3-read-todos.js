require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const readAllTodos = async () => {
    try {
        const todos = await sql`SELECT * FROM todos_ppqita`;
        return todos;
    } catch (error) {
        console.error('Error fetching todos:', error.message);
        return null;
    }
}

readAllTodos().then(console.log)