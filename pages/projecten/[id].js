import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProjectOverview() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `https://architect-website-five.vercel.app/api/projects/getProjectById-lib`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      };

      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.projects);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  return { id };
}
