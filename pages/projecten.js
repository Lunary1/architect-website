import React from "react";

// import external

import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { useState, useEffect } from "react";

// import components

import SummaryProjectcard from "../components/ProjectCard";

// stagger animation

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

// render page function

function Projecten({ data, cats }) {
  const [allData, setAllData] = useState(data.projects);
  const [filterData, setFilteredData] = useState(allData);

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

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
    <section className="max-w-[85vw] m-auto mt-28">
      <div className="pt-8">
        <h1 className="text-4xl uppercase font-serif">overzicht</h1>
        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm hover:border-b-[1px]"
          >
            <h2 className="text-lg">Categorie</h2>
          </motion.button>
        </div>
      </div>

      <nav ref={scope}>
        <ul className="flex justify-start gap-6 py-8 max-w-[1240px] group ">
          <li
            whileTap={{ scale: 0.9 }}
            className="text-sm group-hover:cursor-pointer opacity-0"
            onClick={handleClickReset}
          >
            All
          </li>
          {cats.categories.map((cat) => {
            return (
              <li
                key={cat.cat_id}
                id={cat.cat_id}
                className="text-sm group-hover:cursor-pointer opacity-0"
                onClick={(e) => handleClick(e.currentTarget.id)}
              >
                <p>{cat.name}</p>
              </li>
            );
          })}
        </ul>
      </nav>

      <motion.div
        layout
        className="max-w-[100%] grid grid-cols-2 gap-1 lg:gap-1 lg:grid-cols-3 "
      >
        <AnimatePresence>
          {filterData.map((project, i) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
        </AnimatePresence>
      </motion.div>
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
