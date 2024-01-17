import Image from "next/image";
import { useState } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

export default function ProjectOverview({ images, projectData }) {
  const [toggler, setToggler] = useState(false);

  const projectInfo = projectData.project;

  return (
    <>
      <div className="max-w-[85vw] m-auto mt-28">
        <div className="flex justify-center">
          <h1 className=" text-4xl font-serif">{projectInfo.project_name}</h1>
        </div>
        <div className="mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
          >
            <Masonry gutter="0.2rem">
              {images.map((image) => {
                return (
                  <div
                    className="w-auto hover:cursor-pointer"
                    key={image.id}
                    onClick={() => setToggler(!toggler)}
                  >
                    <Image
                      width={image.width}
                      height={image.height}
                      src={image.image}
                      alt=""
                      layout="responsive"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={images.map((image) => {
          return image.image;
        })}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const projectId = context.query.id;

  const project = await fetch(
    `${process.env.PRODUCTION_URL}/api/projects/${projectId}`
  );

  const projectData = await project.json();

  const results = await search({
    expression: `folder="${projectId}"`,
  });

  const { resources } = results;

  const images = mapImageResources(resources);

  console.log(images);

  return {
    props: {
      images,
      projectData,
    },
  };
}
