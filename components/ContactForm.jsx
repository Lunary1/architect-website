import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaUser,
  FaEnvelope,
  FaTag,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="flex flex-col order-2 md:order-1">
          <div>
            <h3 className="font-bold uppercase pb-4 text-lg text-center md:text-left">
              Architectenbureau Paul Kindt
            </h3>
            <ul className="uppercase text-sm space-y-2 text-center md:text-left">
              <li>ADRES: Fremisstraat 1, Maarkedal</li>
              <li>E-MAIL: info@architect-kindt.be</li>
              <li>PHONE: +32 495 20 56 77</li>
              <li>BTW-NUMMER: BE0123456789</li>
            </ul>
          </div>
          <div className="mt-8 hidden">
            <h4 className="font-bold uppercase pb-2 text-sm text-center md:text-left">
              Social Media
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebookSquare
                  size={30}
                  className="hover:text-blue-600 transition"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagramSquare
                  size={30}
                  className="hover:text-pink-500 transition"
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitterSquare
                  size={30}
                  className="hover:text-blue-400 transition"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="space-y-4 order-1 md:order-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                className="p-3 pl-10 bg-black text-white border border-gray-600 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Uw Naam"
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                className="p-3 pl-10 bg-black text-white border border-gray-600 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Uw Email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <FaTag className="absolute top-3 left-3 text-gray-400" />
            <input
              className="p-3 pl-10 bg-black text-white border border-gray-600 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Onderwerp"
              required
            />
          </div>
          <textarea
            className="p-3 bg-black text-white border border-gray-600 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            cols="30"
            rows="6"
            placeholder="Uw Bericht"
            required
          ></textarea>
          <button className="w-full bg-black text-white p-3 rounded-sm hover:bg-gray-800 transition">
            Verzend
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
