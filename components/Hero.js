import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import logo from "../public/logo_tekst.jpg";

export default function Hero() {
  return (
    <section className="mt-[2rem] bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bouw_gif.gif')" }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content container */}
        <div className="relative z-10 px-4">
          <h1 className="text-white font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            Van concept tot werkelijkheid: onze projecten in beeld
          </h1>
          <p className="text-gray-300 mt-4 max-w-[70%] mx-auto text-[clamp(1rem,2.5vw,1.5rem)]">
            Elke ruimte vertelt een verhaal – ontdek onze creaties
          </p>
          <Link href="/projecten">
            <button className="mt-6 px-6 py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded-lg transition duration-300">
              Bekijk meer
            </button>
          </Link>
        </div>

        {/* Optional: Scroll down indicator */}
        {/* 
        <div className="absolute bottom-6 animate-bounce text-white z-10">
          ↓
        </div>
        */}
      </div>
      {/* Services Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-12">
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mt-4 text-white">
            Residentieel
          </h3>
          <p className="text-gray-400 text-center mt-2">
            Urban Planning, Architecture, Interior Design
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mt-4 text-white">Commercieel</h3>
          <p className="text-gray-400 text-center mt-2">
            Office Planning and Industrial Design
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mt-4 text-white">
            Interieur Design
          </h3>
          <p className="text-gray-400 text-center mt-2">
            Creative and Functional Interior Solutions
          </p>
        </div>
      </div>
      {/* Featured Projects Section */}
      <div className="mt-12 px-6 sm:px-12">
        <h2 className="text-2xl font-thin tracking-tight font-stretch-ultra-condensed uppercase text-center text-white">
          Projecten in de kijker:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/goethals.jpg"
                alt="The Nest"
                className="rounded-t-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Goethals</h3>
              <p className="text-gray-400 mt-2">Architecture</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/vanhoorn.jpg"
                alt="Futurist"
                className="rounded-t-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Vanhoorn</h3>
              <p className="text-gray-400 mt-2">Structural Design</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/vancaester.jpg"
                alt="Futurist"
                className="rounded-t-lg"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Vancaester</h3>
              <p className="text-gray-400 mt-2">Interior Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
