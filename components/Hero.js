import React from "react";
import Image from "next/image";
import logo from "../public/logo_tekst.jpg";

export default function Hero() {
  return (
    <section className="mt-[2rem] bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bouw_gif.gif')" }}
      >
        <h1 className="text-4xl font-bold text-center px-4 sm:text-5xl text-white">
          Van concept tot werkelijkheid: onze projecten in beeld
        </h1>
        <p className="text-lg mt-4 text-center max-w-[70%] mx-auto sm:text-xl text-gray-300">
          Elke ruimte vertelt een verhaal – ontdek onze creaties
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-900 hover:bg-black text-white font-semibold rounded-lg">
          <a href="/projecten">Bekijk meer</a>
        </button>
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
        <h2 className="text-3xl font-bold text-center text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-96">
              <Image
                src="/goethals.jpg"
                alt="The Nest"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
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
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
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
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Vancaester</h3>
              <p className="text-gray-400 mt-2">Interior Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 px-6 sm:px-12 text-center">
        <h2 className="text-3xl font-bold text-white">About Us</h2>
        <p className="text-gray-300 mt-4 max-w-[60%] mx-auto">
          We are a global design firm with a diverse portfolio. We focus on
          urban, industrial, and office projects.
        </p>
      </div>
    </section>
  );
}
