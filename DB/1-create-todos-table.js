require("dotenv").config({ path: ".env.development.local" });

const { sql } = require("@vercel/postgres");

const execute = async () => {
    console.log("execute");

    const deleteTable = await sql`drop table if exists todos_ppqita`;

    console.log(deleteTable);

    const createTable = await sql`create table todos_ppqita (
    id serial primary key,
    todo varchar(255) not null,
    created_at timestamp not null,
    status integer default 0
)`;

    console.log(createTable);
};

execute();
