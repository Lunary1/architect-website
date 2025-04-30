import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/legacy/image";
import { onAuthStateChanged, signOutWithEmail } from "../firebase/auth";
import { useRouter } from "next/router";
import logo from "../public/logo_tekst.jpg";

function useUserSession(initialUser) {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  return user;
}

export default function Navbar({ initialUser }) {
  const user = useUserSession(initialUser);
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => setNav(!nav);

  const handleSignOut = async () => {
    await signOutWithEmail();
    router.push("/");
  };

  return (
    <header className="top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <nav className="flex items-center justify-between px-6 py-4 mb-2">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="w-[8rem] md:w-[10rem] cursor-pointer">
              <Image src={logo} alt="Logo" priority />
            </div>
          </Link>
        </div>

        {/* Center Navigation */}
        <ul className="hidden md:flex gap-6 text-lg uppercase">
          {[
            { name: "Home", path: "/" },
            { name: "Projecten", path: "/projecten" },
            { name: "Over Ons", path: "/over_ons" },
            { name: "Contact", path: "/contact" },
            { name: "Nieuws", path: "/nieuws" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`transition-colors duration-300 ${
                  router.pathname === item.path
                    ? "text-blue-400" // Active link styling
                    : "hover:text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Login Functionality */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/admin"
                className={`hover:text-gray-400 uppercase ${
                  router.pathname === "/admin" ? "text-blue-400" : ""
                }`}
              >
                Admin
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => router.push("/admin/login")}
              className="invisible bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleNavToggle}
          className="md:hidden text-xl focus:outline-none"
          aria-label={nav ? "Close Menu" : "Open Menu"}
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
            <Link href="/">Home</Link>
          </li>
          <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
            <Link href="/projecten">Projecten</Link>
          </li>
          <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
            <Link href="/over_ons">Over Ons</Link>
          </li>
          <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
            <Link href="/nieuws">Nieuws</Link>
          </li>
          {user ? (
            <>
              <li className="mb-6 text-2xl uppercase" onClick={handleNavToggle}>
                <Link href="/admin">Admin</Link>
              </li>
              <li className="mb-6">
                <button
                  onClick={() => {
                    handleSignOut();
                    handleNavToggle();
                  }}
                  className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li className="mb-6">
              <button
                onClick={() => {
                  router.push("/login");
                  handleNavToggle();
                }}
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
