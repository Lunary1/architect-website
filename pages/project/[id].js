import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { mapImageResources, search } from "../../lib/cloudinary";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

export default function ProjectOverview({ images, projectData }) {
  const [toggler, setToggler] = useState(false);

  console.log("Project Data:");
  console.log(projectData.project[0].projectName);

  const projectInfo = projectData.project[0];

  return (
    <>
      <div className="m-auto pt-36">
        <div className="flex justify-center py-8">
          <h1 className="text-white text-4xl font-serif">{projectInfo.projectName}</h1>
        </div>
        <div className="container mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 2 }}
          >
            <Masonry gutter="1rem">
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
    `https://${process.env.PRODUCTION_URL}/api/projects?id=${projectId}`
  );

  const projectData = await project.json();

  const results = await search({
    expression: `folder="${projectId}"`,
  });

  const { resources } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      projectData,
    },
  };
}
