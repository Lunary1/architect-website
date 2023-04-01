import { query } from "../../lib/db";

export default async function product(req, res) {
  const queryResponse = req.query;

  console.log(queryResponse);

  try {
    const querySql =
      "SELECT projectId, projectName, location FROM projects WHERE location = ?";
    const valuesParams = [queryResponse.location];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ project: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
