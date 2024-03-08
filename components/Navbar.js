import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

import logo from "../public/logo.jpg";

import { onAuthStateChanged, signIn, signOutWithEmail } from "../firebase/auth";

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

  const handleSignOut = (event) => {
    event.preventDefault();
    signOutWithEmail();
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[8rem] w-screen mx-auto p-8 text-white ">
      <div className="flex items-center uppercase">
        <Link href="/" passHref>
          <div className="pr-24 max-w-[15rem] cursor-pointer">
            <Image src={logo} alt={logo} />
          </div>
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
        <div className="pr-24 max-w-[15rem]">
          <Image src={logo} alt={logo} />
        </div>
        <li onClick={handleNav} className="p-4">
          <Link href="/">
            <p className="cursor-pointer transition">Home</p>
          </Link>
        </li>
        <li onClick={handleNav} className="p-4">
          <Link href="/projecten">Projecten</Link>
        </li>
        <li onClick={handleNav} className="p-4">
          <Link href="/over_ons">Over ons</Link>
        </li>
        <li onClick={handleNav} className="p-4">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {user ? (
        <>
          <div className="profile">
            <div className="menu">
              <ul className="flex justify-between gap-1">
                <li>
                  <Link href={"/admin/Upload"}>
                    <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase">
                      Nieuw project
                    </button>
                  </Link>
                </li>
                <li>{user.displayName}</li>
                <li>
                  <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 rounded uppercase">
                    <a href="#" onClick={handleSignOut}>
                      Sign Out
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
