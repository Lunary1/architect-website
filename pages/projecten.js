import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import Layout from "../components/nested-layout";
import SummaryProjectcard from "../components/ProjectCard";
import { set } from "nprogress";

function Projecten({ data, cats }) {
  const [category, setCategory] = useState(null);

  console.log(category);

  return (
    <Layout>
      <section className="h-[100vh] m-auto p-24">
        <h1 className="text-4xl p-8 uppercase text-center text-white">
          Projecten
        </h1>
        <div>
          <ul className="flex justify-around p-8">
            {cats.categories.map((cat) => {
              return <li key={cat.catId} className="text-white" onClick={() => setCategory(`${cat.catName}`)}>{cat.catName}</li>;
            })}
          </ul>
        </div>

        <div className="max-w-[100%] grid grid-cols-2 lg:grid-cols-3 text-white">
          {data.projects.map((project) => {
            return (
              <div key={project.projectId}>
                <SummaryProjectcard
                  name={project.projectName}
                  location={project.location}
                  url={`/project/${project.projectId}`}
                  img={`${project.projectName.replace(" ", "")}`}
                />
              </div>
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

  const categories = await fetch(
    `https://architect-website-five.vercel.app/api/category/getData-lib`
  );

  const cats = await categories.json();

  // Pass data to the page via props
  return { props: { data, cats } };
}

export default Projecten;
