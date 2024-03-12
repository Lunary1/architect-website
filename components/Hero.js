// react next imports

import React from "react";

import Image from "next/legacy/image";

//external imports

import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";

import { Link } from "react-scroll";

// image imports

import images from "../images";

const animation = { duration: 75000, easing: (t) => t };

const Hero = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <div className="md:flex justify-center gap:0 my-[2rem]">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, i) => {
            return (
              <div
                key={i}
                className={`keen-slider__slide number-slide${i} h-[90vh]`}
              >
                <Image
                  src={image}
                  alt={image}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
