import { query } from "../../../lib/db";

export default async function product(req, res) {
  const queryResponse = req.query;

  try {
    const querySql = "SELECT * FROM projecten WHERE project_id = ?";
    const valuesParams = [queryResponse.projectId];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ project: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
