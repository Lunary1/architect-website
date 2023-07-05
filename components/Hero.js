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

import schets1 from "../public/schetsen/schets1.jpg";
import schets2 from "../public/schetsen/schets2.jpg";
import schets3 from "../public/schetsen/schets3.jpg";
import schets4 from "../public/schetsen/schets4.jpg";
import schets5 from "../public/schetsen/schets5.jpg";
import schets6 from "../public/schetsen/schets6.jpg";
import schets7 from "../public/schetsen/schets7.jpg";
import schets8 from "../public/schetsen/schets8.jpg";
import schets9 from "../public/schetsen/schets9.jpg";
import schets10 from "../public/schetsen/schets10.jpg";
import schets11 from "../public/schetsen/schets11.jpg";
import schets12 from "../public/schetsen/schets12.jpg";

const schetsArr = [
  schets1,
  schets2,
  schets3,
  schets4,
  schets5,
  schets6,
  schets7,
  schets8,
  schets9,
  schets10,
  schets11,
  schets12,
];

const Hero = () => {
  const [sliderRef] = useKeenSlider(
    {
      drag: false,
      loop: true,
      slides: {
        origin: "center",
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        nextTimeout();
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div>
        <div ref={sliderRef} className="keen-slider">
          {schetsArr.map((schets, i) => {
            console.log(schets);
            return (
              <div key={i} className="keen-slider__slide h-[80vh]">
                <Image
                  objectFit="contain"
                  className="object-center"
                  src={schets.src}
                  height={schets.height}
                  width={schets.width}
                  alt={schets}
                  sizes="(max-width: 1920px) 100vw"
                  layout="responsive"
                  
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
