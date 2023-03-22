import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "../components/nested-layout";
import SummaryProjectcard from "../components/SummaryProjectCard";

import house from "../public/house.webp";

function Projecten({ data }) {
  console.log(data.projects);

  return (
    <Layout>
      <section className="h-[100vh] m-auto mt-24">
        <h1 className="text-4xl text-left p-8 uppercase border-b-2">
          Projecten
        </h1>
        <div className="max-w-[100%] grid grid-cols-2 lg:grid-cols-3 text-white">
          {data.projects.map((project) => {
            return (
              <SummaryProjectcard
                name={project.projectName}
                location={project.location}
                url={`/projecten/${project.projectId}`}
                img="maheur"
              />
            );
          })}
        </div>
        <div></div>
      </section>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://architect-website-five.vercel.app/api/projects/getProjects-lib`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Projecten;
