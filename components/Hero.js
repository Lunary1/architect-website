import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BsArrowDown } from "react-icons/bs";

import { motion } from "framer-motion";

const Hero = ({ heading, message }) => {
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-screen bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="z-0">
          <h3>Paul Kindt</h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
