import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "../components/nested-layout";

import house from "../public/house.webp";

function Projecten({ data }) {
  console.log(data.projects);

  return (
    <Layout>
      <section className="h-[100vh] m-auto mt-24">
        <h1 className="font-bold text-center py-8 text-lg uppercase text-white">
          Projecten
        </h1>
        <div className="text-center max-w-[100%] grid grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) => {
            return (
              <Link
                key={project.projectId}
                href={`/projecten/${project.projectId}`}
                passHref
              >
                <a>
                  <motion.div
                    className="z-1 peer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={house} />
                  </motion.div>
                  <div className="flex justify-between invisible peer-hover:visible text-white relative">
                    <p>{project.projectName}</p>
                    <p>{project.location}</p>
                  </div>
                </a>
              </Link>
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
