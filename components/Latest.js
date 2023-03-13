import React from "react";
import Link from "next/link";
import Image from "next/image";

import house from "../public/house.webp";


function Latest() {
  return (
    <div className="md:max-w-[1240px] mx-4 lg:m-auto py-8">
      <div className="max-w-[25%]">
        <h1 className="uppercase font-bold text-3xl">Onze laatste projecten</h1>
        <p className="text-sm pt-2">
          Our many works have also resulted in various awards as the best
          architect in 2022
        </p>
      </div>
      <div>
        <div className="grid grid-cols-6 text-sm pt-8">
          <div className="col-start-1 col-end-3">
            <ul className=" max-w-[65%] flex justify-between border-gray-600 text-gray-600 border-b-2">
              <li className="hover:font-bold hover:border-black hover:text-black">
                2023
              </li>
              <li className="hover:font-bold hover:border-black hover:text-black">
                2022
              </li>
              <li className="hover:font-bold hover:border-black hover:text-black">
                2021
              </li>
              <li className="hover:font-bold hover:border-black hover:text-black">
                2020
              </li>
              <li className="hover:font-bold hover:border-black hover:text-black">
                2019
              </li>
            </ul>
          </div>
          <div className="col-start-6 flex justify-end">
            <Link href="/projecten">Bekijk alle projecten</Link>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
}



export default Latest;

