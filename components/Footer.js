import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {logo} from '../public/logo.jpg';


function Footer() {
  return (
    <footer className='bg-gray-300'>
      <div className='max-w-[1240px] m-auto py-8'>
      <div className='flex justify-between '>
        <div className=''>
          <h1 className='font-bold border-yellow-300 border-b-2 my-2'>Partners</h1>
          <ul>
            <li>Home</li>
            <li>Projecten</li>
            <li>Nieuws</li>
            <li>Contacteer ons</li>
          </ul>
        </div>

        <div className=''>
        <h1 className='font-bold border-yellow-300 border-b-2 my-2'>Sitemap</h1>
        <ul>
          <li>Home</li>
          <li>Projecten</li>
          <li>Nieuws</li>
          <li>Contacteer ons</li>
        </ul>
        </div>
        <div className=''>
        <h1 className='font-bold border-yellow-300 border-b-2 my-2'>Follow us</h1>
        <ul>
          <li><Link href="">Facebook</Link></li>
          <li><Link href="">Instagram</Link></li>
          <li><Link href="">Youtube</Link></li>
          <li><Link href="">Mail</Link></li>
        </ul>
        </div>
      
        <div><Link href="/"><Image className='hover:cursor-pointer' src="/logo.jpg" width={120} height={80} alt="logo"/></Link></div>
      </div>
      </div>
    </footer>
  )
}

export default Footer