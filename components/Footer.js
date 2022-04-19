import React from 'react'
import logo from '../public/logopaul.png'
import Image from 'next/image'

function Footer() {
  return (
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <Image src={logo} height={30} width={70} alt={"Footer Logo"}/>
    <p className='font-semibold uppercase'>Architectenbureau Paul Kindt</p>
  </div> 
  <div>
    <span className="footer-title">Diensten</span> 
    <a className="">Residentieel</a> 
    <a className="">Industriebouw</a> 
    <a className="">KMO</a> 
    <a className="">Kantoor</a>
  </div> 
  <div>
    <span className="footer-title">Sitemap</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Projecten</a> 
    <a className="link link-hover">Over ons</a> 
    <a className="link link-hover">Contact</a>
  </div> 
  <div>
    <span className="footer-title">Follow us</span> 
    <a className="link link-hover">Facebook</a> 
    <a className="link link-hover">Instagram</a> 
    <a className="link link-hover">Youtube</a>
  </div>
</footer>
  )
}

export default Footer