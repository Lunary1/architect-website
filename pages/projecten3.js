import React from "react";

// import external

import { collection, query, where, getDocs } from "firebase/firestore";

import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  animate,
} from "framer-motion";
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
      isOpen ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 },
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
    <section className="max-w-[85vw] m-auto mt-14">
      <nav ref={scope}>
        <ul className="flex justify-start gap-6 py-8 max-w-[1240px] group flex-wrap">
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="text-sm group-hover:cursor-pointer opacity-0 border-black border-b-[1px] hover:border-b-[1px] hover:border-white"
            onClick={handleClickReset}
          >
            Alles
          </motion.li>
          {cats.categories.map((cat) => {
            return (
              <motion.li
                whileTap={{ scale: 0.97 }}
                key={cat.cat_id}
                id={cat.cat_id}
                className="text-sm group-hover:cursor-pointer border-black border-b-[1px] hover:border-b-[1px] hover:border-white"
                onClick={(e) => handleClick(e.currentTarget.id)}
              >
                <p>{cat.name}</p>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      <motion.div
        layout
        className="max-w-[100%] grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-1 lg:grid-cols-3 "
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
  const q = query(collection(db, "images"));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=> ", doc.data());
  });

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
