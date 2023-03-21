import { query } from "../../../lib/db";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  const router = useRouter();
  const { id } = router.query;
  try {
    const querySql =
      "SELECT projectId, projectName, location FROM projects WHERE projectId = ?";
    const valuesParams = [id];
    const data = await query({ query: querySql, values: valuesParams });

    res.status(200).json({ projects: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
