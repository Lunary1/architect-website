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
  return (
    <>
      <div className="md:flex justify-center gap:0 my-[2rem] ">
        <motion.div className="carousel cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            animate={{ x: "-23040px" }}
            transition={{ repeat: Infinity, duration: 200 }}
            className="inner-carousel flex"
          >
            {images.map((image) => {
              return (
                <motion.div className="item min-w-[40rem]">
                  <Image
                    className=" min-w-[1920px] pointer-events-none"
                    src={image}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
