import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[5rem]">
      <Image className='hover:cursor-pointer' src="/logo.jpg" width={500} height={300}/>

      </div>
    </div>
  );
};

export default Hero;
