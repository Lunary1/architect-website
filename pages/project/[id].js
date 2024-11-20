import Image from "next/image";
import { useState } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

export default function ProjectOverview({ data, error }) {
  const [toggler, setToggler] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="max-w-[85vw] m-auto mt-8">
        <div className="flex justify-center">
          <h1 className="mb-6 text-4xl font-serif">{data.projectName}</h1>
        </div>
        <div className="mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
          >
            <Masonry gutter="1rem">
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
                    layout="responsive"
                    loading="lazy"
                    onLoad={() => setLoading(false)}
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
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
