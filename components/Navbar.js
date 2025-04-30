"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { onAuthStateChanged, signOutWithEmail } from "../firebase/auth";
import { useRouter } from "next/router";
import logo from "../public/logo_tekst.jpg";

export default function Navbar({ initialUser }) {
  const [user, setUser] = useState(initialUser);
  const router = useRouter();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  const handleNavToggle = () => {
    setNav(!nav);
    console.log("Nav state:", nav); // Debugging: Check if state toggles
  };

  const handleSignOut = async () => {
    await signOutWithEmail();
    router.push("/");
  };

  return (
    <header className="top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="w-32 h-auto md:w-40 cursor-pointer">
              <Image
                src={logo}
                alt="Logo"
                width={160}
                height={100}
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Link>
        </div>

        {/* Center Navigation */}
        <ul className="hidden md:flex gap-6 text-lg uppercase ml-auto">
          {[
            { name: "Home", path: "/" },
            { name: "Projecten", path: "/projecten" },
            { name: "Over Ons", path: "/over_ons" },
            { name: "Contact", path: "/contact" },
            { name: "Nieuws", path: "/nieuws" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.path}
                className={`transition-colors duration-300 ${
                  router.pathname === item.path
                    ? "font-bold" // Active link styling
                    : "hover:text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleNavToggle}
          className="md:hidden text-xl focus:outline-none"
          aria-label={nav ? "Close Menu" : "Open Menu"}
          aria-expanded={nav}
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50 transform transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!nav}
        >
          {/* Close Button */}
          <button
            onClick={handleNavToggle}
            className="absolute top-6 right-6 text-3xl focus:outline-none"
            aria-label="Close Menu"
          >
            <AiOutlineClose />
          </button>

          {[
            { name: "Home", path: "/" },
            { name: "Projecten", path: "/projecten" },
            { name: "Over Ons", path: "/over_ons" },
            { name: "Contact", path: "/contact" },
            { name: "Nieuws", path: "/nieuws" },
          ].map((item) => (
            <li
              key={item.name}
              className="mb-6 text-2xl uppercase"
              onClick={handleNavToggle}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
          {user && (
            <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
              <Link href="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
