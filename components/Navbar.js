import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#ffffff");

  const handleNav = () => {
    setNav(!nav);
  };

  const [active, setActive] = useState(false);

  return (
    <nav>
      <div
        style={{ backgroundColor: `${color}` }}
        className="w-full z-1 ease-in duration-200"
      >
        <div className="max-w-[90vw] m-auto flex justify-between py-2 items-center">
          <Link href="/" passHref>
            <div className="max-w-[12%]">
              <Image
                className="hover:cursor-pointer"
                src="/logo.jpg"
                width={1920}
                height={1080}
                alt="Navbar Logo Paul Kindt"
              />
            </div>
          </Link>
          <ul
            style={{ color: `${textColor}` }}
            className="hidden sm:flex uppercase text-sm"
          >
            <li className="px-4 hover:text-gray-200">
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li className="px-4 hover:text-gray-200">
              <Link href="/projecten">Projecten</Link>
            </li>
            <li className="px-4 hover:text-gray-200">
              <Link href="/over_ons">Over Ons</Link>
            </li>
            <li className="px-4 hover:text-gray-200">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4 hover:text-gray-200">
              <Link href="/nieuws">Nieuws</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
            }
          >
            <ul>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/projecten">Projecten</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
