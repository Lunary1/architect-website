import React from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 mt-32 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex md:flex-col justify-evenly">
          <div>
            <h1 className="font-bold uppercase pb-2 text-lg">
              Architectenbureau Paul Kindt
            </h1>
            <ul className="uppercase text-sm">
              <li>ADRES: Fremisstraat 1, Maarkedal</li>
              <li>E-MAIL: info@architect-kindt.be</li>
              <li> PHONE: +32 495 20 56 77</li>
              <li>BTW-NUMMER: </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold uppercase pb-2 text-sm">
              Follow us on
            </h2>
            <div className="max-w-[40%] flex gap-4 hover:cursor-pointer">
              <Link href="">
                <FaFacebookSquare size={25}/>
              </Link>
              <Link href="">
                <FaInstagramSquare size={25} />
              </Link>
              <Link href="">
                <FaTwitterSquare size={25} />
              </Link>
            </div>
          </div>
        </div>
        <form className="mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-2 my-2">
            <input
              className="p-3 bg-black placeholder:text-white"
              type="text"
              placeholder="Naam"
            />
            <input
              className=" p-3 bg-black placeholder:text-white"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className=" p-3 bg-black placeholder:text-white  w-full"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="  p-3 bg-black w-full placeholder:text-white my-2"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="  p-3 w-full mt-2 text-white">Verzend</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
