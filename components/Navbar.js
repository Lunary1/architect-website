import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

import logo from "../public/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[8rem] w-screen mx-auto p-8 text-white ">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="text-4xl pr-24">PK.</div>
        </Link>
        <ul className="hidden md:flex gap-4">
          <li className="p-4">
            <Link href="/">
              <p className="cursor-pointer transition">Home</p>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/projecten">Projecten</Link>
          </li>
          <li className="p-4">
            <Link href="/over_ons">Over ons</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-4"></li>
        </ul>
      </div>
      <button className="hidden md:flex bg-transparent border border-white text-white hover:bg-white hover:text-black font-bold py-2 px-8 rounded transition">
        <Link href="/nieuws">Nieuws</Link>
      </button>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "z-50 fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500    z-1"
            : "ease-in-out duration-500 fixed left-[-100%]    z-9999"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">PK.</h1>
        <li className="p-4">
          <Link href="/">
            <p className="cursor-pointer transition">Home</p>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/projecten">Projecten</Link>
        </li>
        <li className="p-4">
          <Link href="/over_ons">Over ons</Link>
        </li>
        <li className="p-4">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
