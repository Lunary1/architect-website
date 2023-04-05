//components

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";



const Homepage = () => {

  return (
    <>
      <Navbar />
      <Hero heading="Architect Paul Kindt" />
      <Slider />
    </>
  );
};

export default Homepage;
