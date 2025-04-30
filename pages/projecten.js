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
        const newUserDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserDataArray(newUserDataArray);
        setLoading(false);
      }
    };

    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="max-w-[85vw] m-auto mt-8">
        <h1 className="text-4xl text-center uppercase font-bold tracking-wide">
          Projecten
        </h1>
        <div className="text-center mt-4">Loading...</div>
      </section>
    );
  }

  return (
    <section className="max-w-[85vw] m-auto mt-8">
      <h1 className="text-4xl text-center uppercase font-bold tracking-wide"></h1>
      {userDataArray.length === 0 ? (
        <p className="text-center mt-4">No projects available at the moment.</p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 mt-8"
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
      )}
    </section>
  );
}

export default ProjectsList;
