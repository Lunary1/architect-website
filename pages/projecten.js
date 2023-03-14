import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Projecten({ data }) {
  console.log(data.projects);

  return (
    <>
      <section className="max-w-[99%] h-[100vh] m-auto mt-24">
        <h1 className="font-bold text-center py-8 text-4xl uppercase">
          Projecten
        </h1>
        <div className="text-center max-w-[50%] m-auto flex justify-around">
          {data.projects.map((project) => {
            return (
              <Link key={project.projectId} href={"/"}>
                <div>
                  <motion.div
                    className="z-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  <div className="">
                    <p>{project.projectName}</p>
                    <p>{project.location}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div></div>
      </section>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/projects/getProjects-lib`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Projecten;
