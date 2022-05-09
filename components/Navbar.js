import Link from "next/link";
import Image from "next/image"
import logo from "../public/logopaul.png"
import logo2 from "../public/logo.jpg"
 
 const Navbar = () => {
   return (
      <div className="navbar bg-black text-white mx-auto">
        <div className="max-w-7xl">
          
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
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
          <Link href={'/'}><a className="pl-10"><Image src={logo2} width={100} height={50}/></a></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 uppercase font-semibold">
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


 