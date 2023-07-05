//components

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Banner from "../components/Banner";



const Homepage = () => {

  return (
    <>
      <Hero heading="Architect Paul Kindt" />
      <Banner/>
      <Slider />
    </>
  );
};

export default Homepage;
