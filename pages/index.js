//components

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/About";

const Homepage = () => {
  return (
    <>
      <Hero heading="Architect Paul Kindt" />
      <SectionHeader />
      <Slider />
    </>
  );
};

export default Homepage;
