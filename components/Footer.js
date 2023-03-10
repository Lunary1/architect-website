import React from 'react';
import Link from 'next/link';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import Image from 'next/image';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700'>
      <div>
      <Image className='hover:cursor-pointer' src="/logo.jpg" width={120} height={80}/>   
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <h2 className='font-bold uppercase pb-2 text-sm text-black'>Volg ons hier</h2>
        <div className='flex justify-between md:w-[75%] hover:cursor-pointer text-black'>
            <Link href=""><FaFacebookSquare size={30} /></Link>
            <Link href=""><FaInstagram size={30} /></Link>
            <Link href=""><FaTwitterSquare size={30} /></Link>
            <Link href=""><FaGithubSquare size={30} /></Link>
            <Link href=""><FaDribbbleSquare size={30} /></Link>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-6'>
    <div>
        <h6 className='font-medium text-black uppercase'>sitemap</h6>
        <ul>
            <li className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>Projecten</li>
            <li className='py-2 text-sm'>Over Ons</li>
            <li className='py-2 text-sm'>Contact</li>
            <li className='py-2 text-sm'>Nieuws</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black uppercase'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;