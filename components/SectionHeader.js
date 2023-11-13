import React from "react";

export default function HeroSection() {
  return (
    <section className="mb-28 sm:mb-0 scroll-mt-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-32 mx-auto my-16">
        <h1 className="text-2xl sm:text-4xl">
          {"Creating Modern Spaces for Inspired Living and Working"}
        </h1>
        <div>
          <p className="text-sm">
            Experience the perfect blend of functionality and aesthetics in our
            innovative designs.
          </p>
          <span className="flex gap-2 pt-4">
            <a
              href=""
              className="bg-white text-black px-4 border hover:bg-black hover:border-white hover:text-white transition"
            >
              Explore
            </a>
            <a
              href=""
              className="bg-white text-black px-4 border hover:bg-black hover:border-white hover:text-white transition"
            >
              Contact
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
