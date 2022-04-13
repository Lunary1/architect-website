import Link from "next/link";
import Image from "next/image"
import hamburger from "../public/hamburger.png"
import { useState } from "react";
import logo from "../public/logopaul.png"
import search from "../public/search.png"
 
 const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
   return (

    <nav className="flex justify-between px-4 py-8 mx-auto bg-white">
        <div className="navigation">
          <section className="MOBILE-MENU flex">
            <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-semibold">
              <li><Image src={logo} height={30} width={70}  /></li>
              <Link href="/" passHref>
                <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/projects" passHref>
                <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                  <a>Projecten</a>
                </li>
              </Link>
              <Link href="/about" passHref>
                <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                  <a>Over ons</a>
                </li>
              </Link>
              <Link href="/contact" passHref>
                <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </section>
        </div>
        <div className="logo flex items-center">
          <Link href="/" passHref><Image className="cursor-pointer" src={logo} height={30} width={70} /></Link>
        </div>
        <div className="sm:visible search flex items-center font-semibold uppercase">
            <h2 className="">ZOEKEN</h2>
            <Image src={search} />
        </div>
    </nav>

   )
 }
 
 export default Navbar


 