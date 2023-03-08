import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className="px-8 py-2 border rounded-md"
        >
          Contact
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
