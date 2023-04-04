import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import SummaryProjectcard from "../../components/ProjectCard";

function Projecten({ data, cats }) {
  const [category, setCategory] = useState(null);

  console.log(data);

  return (
    <section className="m-auto pt-24 px-12">
      <h1 className="text-4xl p-8 uppercase text-center text-white">
        Projecten
      </h1>

      <ul className="flex justify-around p-8">
        {cats.categories.map((cat) => {
          return (
            <li
              key={cat.cat_id}
              className="text-white"
              onClick={() => setCategory(`${cat.cat_id}`)}
            >
              <Link href={`/category/${cat.cat_id}`}>{cat.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="max-w-[100%] grid grid-cols-1 gap-1 lg:gap-0 lg:grid-cols-3 text-white">
        {data.projects.map((project) => {
          return (
            <div key={project.project_id}>
              <SummaryProjectcard
                name={project.project_name}
                location={project.project_location}
                url={`/project/${project.project_id}`}
                img={project.project_thumbnail}
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
  const catId = context.query.id;

  // Fetch data from external API
  const res = await fetch(
    `${process.env.PRODUCTION_URL}/api/categories/${catId}`
  );
  const data = await res.json();

  const categories = await fetch(
    `${process.env.PRODUCTION_URL}/api/categories`
  );

  const cats = await categories.json();

  // Pass data to the page via props
  return { props: { data, cats } };
}

export default Projecten;
