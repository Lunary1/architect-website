// react next imports

import React from "react";

import Image from "next/image";

//external imports

import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-scroll";

// image imports

import { BsChevronCompactDown } from "react-icons/bs";
import logo from "./../public/logo.jpg";
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
      <div className="md:flex justify-center gap:0 my-[2rem] ">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image) => {
            return (
              <div key={image} className={`keen-slider__slide`}>
                <Image src={image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}; 

export default Hero;
