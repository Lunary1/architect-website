import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import SummaryProjectcard from "../components/ProjectCard";

function Projecten({ data, cats }) {
  const [category, setCategory] = useState(null);

  console.log(data)

  return (
    <section className="m-auto pt-24 px-12">
      <h1 className="text-4xl p-8 uppercase text-center text-white">
        Projecten
      </h1>

      <ul className="flex justify-around p-8">
        {cats.categories.map((cat) => {
          return (
            <li
              key={cat.catId}
              className="text-white"
              onClick={() => setCategory(`${cat.catName}`)}
            >
              <Link href={`/category/${cat.catId}`}>{cat.catName}</Link>
            </li>
          );
        })}
      </ul>

      <div className="max-w-[100%] grid grid-cols-1 gap-1 lg:gap-0 lg:grid-cols-3 text-white">
        {data.projects.map((project) => {
          return (
            <div key={project.projectId}>
              <SummaryProjectcard
                name={project.projectName}
                location={project.location}
                url={`/project/${project.projectId}`}
                img={project.thumbnail_url}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const catId = context.query.catId;

  // Fetch data from external API
  const res = await fetch(
    `https://${process.env.PRODUCTION_URL}/api/projects/getProjects-lib`
  );
  const data = await res.json();

  const categories = await fetch(
    `https://${process.env.PRODUCTION_URL}/api/category/getData-lib`
  );

  const cats = await categories.json();

  // Pass data to the page via props
  return { props: { data, cats } };
}

export default Projecten;
