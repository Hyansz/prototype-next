import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    // cek method
    if (req.method !== "GET") {
        return res.status(405).json({ error: "method not allowed" });
    }

    // cek data
    let { id } = await req.query;

    if (!id) {
        return res.status(400).json({ error: "id harus ada" });
    }

    // get data
    const resData =
        await sql`select todo, id, created_at, status from todos_ppqita where id=${id}`;

    // beritahu klo success
    return res.status(200).json({ message: "success", data: resData.rows[0] });
}
