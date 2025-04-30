import React from "react";
import Link from "next/link";

import Image from "next/image";

export default function Nieuws() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white py-12">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            News Section Coming Soon!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We&apos;re busy preparing exciting news content for you. Stay tuned
            for updates!
          </p>
          <Link href="/">
            <p className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
              Back to Home
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
