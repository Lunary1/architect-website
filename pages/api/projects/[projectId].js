import { query } from "../../../lib/db";

export default async function product(req, res) {
  const queryResponse = req.query;

  try {
    const querySql =
      "SELECT projectId, projectName, location FROM projects WHERE projectId = ?";
    const valuesParams = [queryResponse.id];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ project: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
