import { query } from "../../lib/db";

export default async function product(req, res) {
  try {
    const querySql = "SELECT * FROM categories";
    const valuesParams = [];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ categories: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
