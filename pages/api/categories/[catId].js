import { query } from "../../../lib/db";

export default async function product(req, res) {
  const queryResponse = req.query;

  try {
    const querySql =
      "SELECT * FROM `projecten` INNER JOIN categories ON projecten.cat_id = categories.cat_id WHERE projecten.cat_id = ?";
    const valuesParams = [queryResponse.catId];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ projects: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
