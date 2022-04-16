import Link from "next/link";
import Image from "next/image"
import hamburger from "../public/hamburger.png"
import { useState } from "react";
import logo from "../public/logopaul.png"
 
 const Navbar = () => {
   return (
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href={'/'}><a>Home</a></Link>
              </li>
              <li>
                <Link href={'/projects'}><a>Projecten</a></Link>
              </li>
              <li>
                <Link href={'/about'}><a>Over ons</a></Link>
              </li>
              <li>
                <Link href={'/contact'}><a>Contact</a></Link>
              </li>
            </ul>
          </div>
          <Link href={'/'}><a className="pl-12"><Image src={logo} width={40} height={30}/></a></Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link href={'/'}><a>Home</a></Link>
            </li>
            <li>
              <Link href={'/projects'}><a>Projecten</a></Link>
            </li>
            <li>
              <Link href={'/about'}><a>Over ons</a></Link>
            </li>
            <li>
              <Link href={'/contact'}><a>Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>

   )
 }
 
 export default Navbar


 