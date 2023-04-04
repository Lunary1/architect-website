import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocation } from "react-router-dom";

import logo from "../public/logo.jpg";

import { animate, motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1240px] m-auto bg-black mt-8">
        <div className="footer grid grid-cols-1">
          <div className="m-auto">
            <div className="max-w-[10%] mx-auto">
              <Image
                src={logo}
                width={1920}
                height={1080}
                alt="Logo Paul Kindt"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center  text-white">
            <motion.div
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <SocialIcon
                bgColor="black"
                fgColor="white"
                url="https://www.facebook.com/profile.php?id=100047843332654"
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <SocialIcon
                bgColor="black"
                fgColor="white"
                url="https://www.instagram.com/paulkindt/"
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <SocialIcon
                bgColor="black"
                fgColor="white"
                url="https://architect-website-five.vercel.app/"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
