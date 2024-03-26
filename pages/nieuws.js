import React from "react";
import Link from "next/link";

import Image from "next/legacy/image";

export default function Nieuws() {
  return (
    <section className="max-w-[85vw] m-auto mt-14">
      <h1 className="text-4xl text-center uppercase"></h1>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="max-w-md text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            News Section Coming Soon!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We're busy preparing exciting news content for you. Stay tuned for
            updates!
          </p>
          <Link href="/">
            <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
              Back to Home
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
