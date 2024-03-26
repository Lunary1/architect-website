import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/legacy/image";

import logo from "../public/logo.jpg";

import { onAuthStateChanged, signIn, signOutWithEmail } from "../firebase/auth";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

function useUserSession(initialUser) {
  // The initialUser comes from the server via a server component
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (user === undefined) return;

      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user;
}

export default function Navbar({ initialUser }) {
  const user = useUserSession(initialUser);
  const router = useRouter();

  const handleSignOut = (event) => {
    event.preventDefault();
    signOutWithEmail();
    router.push("/");
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="h-[8rem] w-screen mx-auto p-8 text-white">
      <nav className="flex items-center justify-between uppercase">
        <Link href="/" passHref>
          <div className="w-[10rem] md:w-[15rem] cursor-pointer">
            <Image src={logo} alt={logo} />
          </div>
        </Link>
        <ul className="hidden md:flex gap-4 text-xl">
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
          <li className="p-4">
            <Link href="/nieuws">
              <p>Nieuws</p>
            </Link>
          </li>
        </ul>

        {user ? (
          <ul className="flex">
            <li className="p-4">
              <Link href={"/admin"}>
                <button className="uppercase">Admin</button>
              </Link>
            </li>
            <li className="p-4">
              <button className="uppercase">
                <a href="#" onClick={handleSignOut}>
                  Sign Out
                </a>
              </button>
            </li>
          </ul>
        ) : (
          <></>
        )}

        <div onClick={handleNav} className="z-10 block md:hidden">
          {nav ? (
            <AiOutlineClose className="z-0" size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-20"
              : "ease-in-out duration-500 fixed left-[-100%] z-50"
          }
        >
          <div className="w-[10rem] md:w-[15rem] cursor-pointer">
            <Image src={logo} alt={logo} />
          </div>
          <li onClick={handleNav} className="p-4">
            <Link href="/">
              <p className="cursor-pointer transition text-2xl">Home</p>
            </Link>
          </li>
          <li onClick={handleNav} className="p-4">
            <Link href="/projecten">
              <p className="cursor-pointer transition text-2xl">Projecten</p>
            </Link>
          </li>
          <li onClick={handleNav} className="p-4">
            <Link href="/over_ons">
              <p className="cursor-pointer transition text-2xl">Over ons</p>
            </Link>
          </li>
          <li onClick={handleNav} className="p-4">
            <Link href="/contact">
              <p className="cursor-pointer transition text-2xl">Contact</p>
            </Link>
          </li>
          <li onClick={handleNav} className="p-4">
            <Link href="/nieuws">
              <p className="cursor-pointer transition text-2xl">Nieuws</p>
            </Link>
          </li>
          {user ? (
            <>
              <li onClick={handleNav} className="p-4">
                <Link href={"/admin"}>
                  <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase">
                    Nieuw project
                  </button>
                </Link>
              </li>
              <li onClick={handleNav} className="p-4">
                <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase">
                  <a href="#" onClick={handleSignOut}>
                    Sign Out
                  </a>
                </button>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </header>
  );
}
