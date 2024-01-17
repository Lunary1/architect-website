//components

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/About";
import Image from "next/image";

import logo from "../public/logo_tekst.jpg";

const Homepage = () => {
  return (
    <>
      <Hero heading="Architect Paul Kindt" />
      <div className="max-w-[35%] m-auto">
        <Image src={logo} alt={logo} />
      </div>
    </>
  );
};

export default Homepage;
