import Head from "next/head";
import Summary from "../components/Summary";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";

import vanhoorn from "../public/vanhoorn.jpg";
import devuyst from "../public/devuyst.jpg";
import goethals from "../public/goethals.jpg";
import ifire from "../public/ifire.jpg";
import maheur from "../public/maheur.jpg";
import vanoverberghe from "../public/vanoverberghe.jpg";

const Homepage = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    },
    loop: true,
  });
  return (
    <>
      <Navbar />
      <Hero heading="Architect Paul Kindt" />
      <section id="section-1">
        <div className="w-screen m-auto">
          <div className="my-8">
            <h1 className="text-3xl uppercase text-center text-white">
              Laatste projecten
            </h1>
          </div>
          <div ref={sliderRef} className="keen-slider hover:cursor-grab">
            <div className="keen-slider__slide number-slide1">
              <Image
                layout="responsive"
                src={vanhoorn}
                alt="slider Foto"
                width={1920}
                height={1080}
              />
            </div>
            <div className="keen-slider__slide number-slide2">
              <Image
                layout="responsive"
                src={devuyst}
                alt="slider Foto"
                width={1920}
                height={1080}
              />
            </div>
            <div className="keen-slider__slide number-slide3">
              <Image
                layout="responsive"
                src={goethals}
                alt="slider Foto"
                width={1920}
                height={1080}
              />
            </div>
            <div className="keen-slider__slide number-slide4">
              <Image
                layout="responsive"
                src={ifire}
                alt="slider Foto"
                width={1920}
                height={1080}
              />
            </div>
            <div className="keen-slider__slide number-slide5">
              <Image
                layout="responsive"
                src={maheur}
                alt="slider Foto"
                width={1920}
                height={1080}
              />
            </div>
            <div className="keen-slider__slide number-slide6">
              <Image
                layout="responsive"
                src={vanoverberghe}
                alt="slider Foto"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
