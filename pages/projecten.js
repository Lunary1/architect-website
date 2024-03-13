import React from "react";

// import external

import {
  getDocs,
  collection,
  query,
  doc,
  where,
  QuerySnapshot,
} from "firebase/firestore";

import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  animate,
} from "framer-motion";
import { useState, useEffect } from "react";

// import components

import { db } from "../firebase/config";
import SummaryProjectcard from "../components/ProjectCard";

// render page function

function Projecten2() {
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "images")).then((querySnapshot) => {
      const newUserDataArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserDataArray(newUserDataArray);
    });
  });
  return (
    <section className="max-w-[85vw] m-auto mt-[2rem]">
      <h1 className="text-4xl text-center uppercase">Projecten</h1>
      <motion.div
        layout
        className="max-w-[100%] grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-1 lg:grid-cols-3 mt-[2rem]"
      >
        <AnimatePresence>
          {userDataArray.map((userData) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={userData.id}
            >
              <SummaryProjectcard
                name={userData.name}
                url={`/project/${userData.id}`}
                img={userData.thumbnailUrl.downloadUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projecten2;
