import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import thumbnail from "../../public/Maheur/Maheur1.jpeg";
import Hero from "../../components/Hero";

const Project = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="max-w-[1240px] m-auto my-24">
        <h1 className="text-4xl font-bold text-center">Maheur</h1>
        <Image className="hover:cursor-pointer" onClick={() => setToggler(!toggler)} src={thumbnail} alt="thumbnail"/>
        <FsLightbox
          toggler={toggler}
          sources={[
            "https://res.cloudinary.com/dhcbvhzfh/image/upload/v1678200115/Maheur/Maheur_1_vyxtwl.jpg",
            "https://res.cloudinary.com/dhcbvhzfh/image/upload/v1678200114/Maheur/Maheur_2_sv53wg.jpg",
            "https://res.cloudinary.com/dhcbvhzfh/image/upload/v1678200113/Maheur/FOTOGRAAF-Valerie-Clarysse-fotoshoot-voor-LUXHOME-INTERIOR-04-copyright-08_hwx4gp.jpg",
            "https://res.cloudinary.com/dhcbvhzfh/image/upload/v1678200112/Maheur/luxhome-project-m-bovenverdieping0D03-1-1140x1711_pdsfej.jpg",
            "https://res.cloudinary.com/dhcbvhzfh/image/upload/v1678200112/Maheur/FOTOGRAAF-Valerie-Clarysse-fotoshoot-voor-LUXHOME-INTERIOR-04-copyright-01_hv12ll.jpg",
            "https://res.cloudinary.com/dhcbvhzfh/image/upload/v1678200112/Maheur/luxhome-project-m0D00-1140x759_jzkhqn.jpg",
          ]}
        />
      </div>
    </>
  );
};

export default Project;
