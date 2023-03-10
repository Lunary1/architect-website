import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../components/Hero'

import house1 from '../public/Maheur/Maheur1.jpeg'
import house2 from '../public/De_Vuyst/IMG_2562.jpg'
import house3 from '../public/Van_Overberghe/4Achtergevel.JPG'
import house4 from '../public/house.webp'

const projects = () => {




  return (
    <>
    <Hero heading="Projecten" message="Bekijk hier mijn projecten"/>
    <section className='max-w-[99%]  m-auto'>
      <h1 className='font-bold text-center py-8 text-4xl uppercase'>Projecten</h1>
      <div className='md:flex justify-between gap-1'>
        <Link href="/projects/1">
        <a>
          <Image src={house1} alt="house"/>
          <div className='p-4'>
          <h3 className='font-bold text-2xl'>Maheur</h3>
          <p className=''>Location</p>
          </div>
          </a>
        </Link>
        <Link href="/projects/1">
        <a>
          <Image src={house2} alt="house"/>
          <div className='p-4'>
          <h3 className='font-bold text-2xl'>Maheur</h3>
          <p className=''>Location</p>
          </div>
          </a>
        </Link>
        <Link href="/projects/1">
        <a>
          <Image src={house3} alt="house"/>
          <div className='p-4'>
          <h3 className='font-bold text-2xl'>Maheur</h3>
          <p className=''>Location</p>
          </div>
          </a>
        </Link>
        <Link href="/projects/1">
        <a>
          <Image src={house4} alt="house"/>
          <div className='p-4'>
          <h3 className='font-bold text-2xl'>Maheur</h3>
          <p className=''>Location</p>
          </div>
          </a>
        </Link>
        




      </div>
    </section>
    </>
  )
}

export default projects