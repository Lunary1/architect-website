import React, { useState, useEffect } from "react";
import { getDocs as fetchDocuments, collection } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebase/config";
import SummaryProjectcard from "../components/ProjectCard";

function ProjectsList() {
  const [userDataArray, setUserDataArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      const querySnapshot = await fetchDocuments(collection(db, "images"));
      if (isMounted) {
        const newUserDataArray = querySnapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .sort((a, b) => b.createdAt - a.createdAt); // optional sorting
        setUserDataArray(newUserDataArray);
        setLoading(false);
      }
    };

    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full max-w-[1440px] px-4 sm:px-8 mx-auto mt-12">
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
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
                altText={`Thumbnail for ${userData.name}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default ProjectsList;
