// nextjs imports

import Image from "next/image";
import { useRef, useEffect } from "react";

// external imports

import { motion, useInView } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// images

import vanhoorn from "../public/vanhoorn.jpg";
import devuyst from "../public/devuyst.jpg";
import goethals from "../public/goethals.jpg";
import ifire from "../public/ifire.jpg";
import maheur from "../public/maheur.jpg";
import vanoverberghe from "../public/vanoverberghe.jpg";

const animation = { duration: 30000, easing: (t) => t };

export default function Slider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: { size: 0.5 },
    slides: { perView: 2}
  });
  return (
    <div id="section-1">
      <div className="my-24 max-w-[95%] m-auto">
        <section className="flex flex-col md:flex-row  gap-8 justify-between">
          <h2
            ref={ref}
            className="uppercase text-5xl max-w-[30%]"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Nieuwste <br /> projecten
          </h2>
          <p
            ref={ref}
            className="md:whitespace-pre-line md:max-w-[45%] text-sm"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Welkom op mijn architectenportfolio, mijn naam is Paul Kindt en ik
            ben gevestigd in Maarkedal. Ik ben gepassioneerd over het creëren
            van prachtige en functionele gebouwen en ruimtes die het dagelijks
            leven van mensen verbeteren.
          </p>
        </section>
      </div>
      <div className="w-screen m-auto">
        <div ref={sliderRef} className="keen-slider hover:cursor-grab ">
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
    </div>
  );
}
