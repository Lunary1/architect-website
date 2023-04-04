import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

import SummaryProjectcard from "../components/ProjectCard";

function Projecten({ data, cats }) {
  const [allData, setAllData] = useState(data.projects);
  const [filterData, setFilteredData] = useState(allData);

  const handleClick = (e) => {
    let value = e;
    let result = [];

    result = allData.filter((project) => {
      return project.cat_id == value;
    });
    setFilteredData(result);
  };

  const handleClickReset = () => {
    setFilteredData(allData);
  };

  return (
    <section className="m-auto pt-24 px-12">
      <h1 className="text-4xl p-8 uppercase text-center text-white">
        Projecten
      </h1>
      <ul className="flex justify-around p-8">
        <button className="text-white" onClick={handleClickReset}>
          Alle projecten
        </button>
        {cats.categories.map((cat) => {
          return (
            <button
              key={cat.cat_id}
              id={cat.cat_id}
              className="text-white"
              onClick={(e) => handleClick(e.currentTarget.id)}
            >
              <p>{cat.name}</p>
            </button>
          );
        })}
      </ul>
      <div className="max-w-[100%] grid grid-cols-2 gap-1 lg:gap-1 lg:grid-cols-3 text-white">
        {filterData.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{duration: 0.3, delay: i * 0.1}}
            key={project.project_id}
          >
            <SummaryProjectcard
              name={project.project_name}
              location={project.project_location}
              url={`/project/${project.project_id}`}
              img={project.project_thumbnail}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.PRODUCTION_URL}/api/projects`);
  const data = await res.json();

  const categories = await fetch(
    `${process.env.PRODUCTION_URL}/api/categories`
  );

  const cats = await categories.json();

  // Pass data to the page via props
  return { props: { data, cats } };
}

export default Projecten;
