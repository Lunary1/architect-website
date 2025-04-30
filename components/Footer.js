import React from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

import logo from "../public/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="border-t border-gray-700 mt-12"></div>
      {/* New Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Socials</h3>
            <div className="text-sm">
              {/* Existing Footer Section */}
              <div className="max-w-[1240px] bg-black flex flex-col md:items-start items-center">
                <div className="footer grid grid-cols-1">
                  <ul className="flex gap-4 text-white">
                    <motion.li
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                    >
                      <SocialIcon
                        bgColor="black"
                        fgColor="white"
                        url="https://www.facebook.com/profile.php?id=100047843332654"
                      />
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                    >
                      <SocialIcon
                        bgColor="black"
                        fgColor="white"
                        url="https://www.instagram.com/paulkindt/"
                      />
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                    >
                      <SocialIcon
                        bgColor="black"
                        fgColor="white"
                        url="https://architect-website-five.vercel.app/"
                      />
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Snelkoppelingen
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projecten"
                  className="hover:text-white transition-colors"
                >
                  Projecten
                </Link>
              </li>
              <li>
                <Link
                  href="/over_ons"
                  className="hover:text-white transition-colors"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              <strong>Adres:</strong> Fremisstraat 1A, 9680 Maarkedal
            </p>
            <p className="text-sm">
              <strong>Telefoon: +32 495 20 56 77 </strong>
            </p>
            <p className="text-sm">
              <strong>Email:</strong>
              <a
                href="mailto:paul@architect-kindt.be"
                className="hover:text-white transition-colors"
              >
                info@architectenbureau.be
              </a>
            </p>
            <p className="text-sm">
              <strong>BTW-Nummer:</strong> BE0123456789
            </p>
            <p className="text-xs text-gray-500 mt-4">
              © 2025 Architect Paul Kindt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
