import Image from "next/image";
import { useState } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Masonry from "react-masonry-css";
import FsLightbox from "fslightbox-react";

export default function ProjectOverview({ data, error }) {
  const [toggler, setToggler] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1,
  };

  return (
    <>
      <div className="max-w-[85vw] m-auto mt-8">
        <div className="flex justify-center">
          <h1 className="mb-6 text-4xl font-serif">{data.projectName}</h1>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.images.map((image, index) => (
            <div
              className="w-auto hover:cursor-pointer"
              key={index}
              onClick={() => {
                setActiveImageIndex(index);
                setToggler(!toggler);
              }}
            >
              <Image
                src={image}
                height={500}
                width={700}
                alt={`Image ${index + 1} of ${data.projectName}`}
                loading="lazy"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={data.images}
        slide={activeImageIndex + 1}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const projectId = context.query.id;

  try {
    if (!projectId) {
      return { notFound: true };
    }

    const docRef = doc(db, `images/${projectId}`);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists) {
      const data = JSON.parse(JSON.stringify(docSnapshot.data()));
      return { props: { data } };
    } else {
      return { notFound: true };
    }
  } catch (error) {
    console.error(`Error fetching document [${projectId}]:`, error.message);
    return { props: { error: "Error fetching document" } };
  }
}
