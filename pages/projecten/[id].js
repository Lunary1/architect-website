import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Projecten() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/projects/getProjects-lib`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.projects);
      setDataResponse(res.projects);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  return (
    <>
      <section className="max-w-[99%] h-[100vh] m-auto mt-24">
        <h1 className="font-bold text-center py-8 text-4xl uppercase">
          Projecten
        </h1>
        <div className="text-center max-w-[50%] m-auto flex justify-around">
          {dataResponse.map((project) => {
            return (
              <Link href="">
                <a>{project.projectName}</a>
              </Link>
            );
          })}
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Projecten;
