import { query } from "../../../lib/db";

export default async function handler(req, res) {
  
  try {
    const querySql =
      "SELECT projectId, projectName, location FROM projects WHERE projectId = ?";
    const valuesParams = [2];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ project: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
