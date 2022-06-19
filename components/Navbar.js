import Link from "next/link";
import Image from "next/image"
import logo2 from "../public/logo.jpg"
import { MenuIcon } from '@heroicons/react/solid'
import { MailIcon } from '@heroicons/react/solid'

import { useState } from 'react';

 
 const Navbar = () => {

    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

   return (
 <>
      <div className="c-nav ">
      <nav className='flex items-center flex-wrap py-16 container mx-auto mb-12 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            
            <span className='text-2xl text-white font-bold uppercase tracking-wide'>
              Architect Paul Kindt
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-xl text-white  items-center justify-center hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/projects'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-xl text-white items-center justify-center hover:text-white'>
                Projecten
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-xl text-white items-center justify-center hover:text-white'>
                Over ons
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-xl text-white items-center justify-center hover:text-white'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
      </div>

    </>


   )
 }
 
 export default Navbar


 