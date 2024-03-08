// react next imports

import React from "react";

import Image from "next/legacy/image";

//external imports

import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-scroll";

// image imports

import images from "../images";

const Hero = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
    loop: true,
    renderMode: "performance",
  });

  return (
    <>
      <div className="md:flex justify-center gap:0 my-[2rem] ">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, i) => {
            return (
              <div key={i} className={`keen-slider__slide`}>
                <Image src={image} alt={image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
