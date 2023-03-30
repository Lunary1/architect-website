import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { mapImageResources, search } from "../../lib/cloudinary";
import Layout from "../../components/nested-layout";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

export default function ProjectOverview({ images }) {
  const [projectData, setProjectData] = useState([]);

  async function getOverview() {
    const apiUrlEndpoint = `http://localhost:3000/api/projects/getProjectById-lib`;
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const res = await fetch(apiUrlEndpoint, postData);
    const response = await res.json();
    setProjectData(response.project);
  }


  const [toggler, setToggler] = useState(false);

  return (
    <Layout>
      <div className="pt-20">
        <div>
          <h1></h1>
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
                      objectFit="contain"
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
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const projectId = context.query.id;

  const results = await search({
    expression: `folder="${projectId}"`,
  });

  const { resources } = results;

  const { pid } = projectId;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
    },
  };
}
