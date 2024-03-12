import React from "react";
import Image from "next/legacy/image";
import images from "../images";
import logo from "../public/logo_tekst.jpg";
import HorizontalScrollBanner from "./Banner";

export default function Hero() {
  return (
    <>
      <HorizontalScrollBanner images={images} />
      <div className="max-w-[35%] m-auto mt-[2rem]">
        <Image src={logo} alt={logo} />
      </div>
    </>
  );
}
