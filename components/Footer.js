import React from 'react'
import logo from '../public/logopaul.png'
import logo2 from '../public/logo.jpg'
import Image from 'next/image'


function Footer() {
  return (
    <footer className="black">
      <div className="container footer-wrapper text-white mx-auto">
        <div className='footer-wrapper__col'>
          <Image src={logo2} alt="Logo Medium"/>
          <p className="text-lg uppercase font-semibold">Architectenbureau Paul Kindt</p>
          <div className="footer-wrapper__socials">
            <ul>
              <li>
                <a href=""><facebook /></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <p className="footer-wrapper__text">
                Copyright ©2020 All rights reserved
              </p>
            </ul>
          </div>
        </div>
        <div className='footer-wrapper__col'>
          <h4 className='text-lg uppercase font-semibold'>Pagina&apos;s</h4>
        </div>
        <div className='footer-wrapper__col'>
          <h4 className='text-lg uppercase font-semibold'>Privacy</h4>
          <ul>
            <li><a href="">Over ons</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contacteer ons</a></li>
          </ul>
        </div>
        <div className='footer-wrapper__col'>
          <h4 className='text-lg uppercase font-semibold'>Contact info</h4>
          <ul className="footer-wrapper__contact">
            <li className="footer-wrapper__contact-item"><Image src="/public/mail.svg" width={50} height={50} alt=""/><a href="">paul@architect-kindt.be</a></li>
            <li className="footer-wrapper__contact-item"><Image src="/public/phone.svg" width={50} height={50}  alt=""/><a href="">+0 320 422 4254</a></li>
            <li className="footer-wrapper__contact-item"><Image src="/public/map-pin.svg" width={50} height={50}  alt=""/><a href="">Fremisstraat, 9680 Maarkedal</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer