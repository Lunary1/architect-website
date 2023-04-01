import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BsArrowDown } from "react-icons/bs";

import { motion } from "framer-motion";

const Hero = ({ heading, message }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"></div>
        <div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]">
          <h2 className="text-lg md:text-5xl uppercase font-bold">
            {heading}
          </h2>
          <p className="py-5 text-xl">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
