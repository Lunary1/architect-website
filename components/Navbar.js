import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-200'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center py-4 px-4 text-white'>
        <Link href='/'>
          <Image className='hover:cursor-pointer' src="/logo.jpg" width={120} height={80}/>        
        </Link>
        <ul style={{color: `${textColor}`}} className='hidden sm:flex uppercase text-sm'>
          <li className='px-4 border-transparent border-b-2 hover:border-black hover:border-b-2 ease-out transition-[0.1s]'>
            <Link href='/'>Home</Link>
          </li>
          <li className='px-4 border-transparent border-b-2 hover:border-black hover:border-b-2 ease-out transition-[0.1s]'>
            <Link href='/projecten'>Projecten</Link>
          </li>
          <li className='px-4 border-transparent border-b-2 hover:border-black hover:border-b-2 ease-out transition-[0.1s]'>
            <Link href='/over_ons'>Over Ons</Link>
          </li>
          <li className='px-4 border-transparent border-b-2 hover:border-black hover:border-b-2 ease-out transition-[0.1s]'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='px-4 border-transparent border-b-2 hover:border-black hover:border-b-2 ease-out transition-[0.1s]'>
            <Link href='/nieuws'>Nieuws</Link>
          </li>

        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200'}>
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/projecten'>Projecten</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar