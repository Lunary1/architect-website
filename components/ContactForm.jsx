import React from "react";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 mb-12 mt-36">

      <div className="flex justify-between">
        <div>
          <h1 className="font-bold uppercase pb-2 text-sm">Architectenbureau Paul Kindt</h1>
          <ul className="uppercase text-sm">
            <li>ADRES: Fremisstraat 1, Maarkedal</li>
            <li>E-MAIL: INFO@NGARCHITECTS.LT</li>
            <li>ADDRESS: KONSTITUCIJOS PR. 23c-119, VILNIUS</li>
            <li> PHONE: +370 601 55332</li>
            <li>COMPANY CODE: 302567842</li>
          </ul>

          <h2 className="font-bold uppercase pb-2 text-sm mt-4">Volg ons hier</h2>
          <div className="max-w-[40%] flex justify-between hover:cursor-pointer">
            <Link href="">
              <FaFacebookSquare size={30} />
            </Link>
            <Link href="">
              <FaInstagramSquare size={30} />
            </Link>
            <Link href="">
              <FaTwitterSquare size={30} />
            </Link>
          </div>
        </div>
        <form className="max-w-[600px] m-auto">
          <h1 className="font-bold uppercase pb-2 text-lg">Stel uw vraag</h1>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border shadow-lg p-3"
              type="text"
              placeholder="Name"
            />
            <input
              className="border shadow-lg p-3"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border shadow-lg p-3 w-full"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border shadow-lg p-3 w-full my-2"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
