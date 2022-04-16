import React from 'react'
import logo from '../public/logopaul.png'
import Image from 'next/image'

function Footer() {
  return (
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <Image src={logo} height={30} width={70} />
    <p className='font-semibold uppercase'>Architectenbureau Paul Kindt</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
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