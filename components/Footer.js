import React from "react";
import { useLocation } from "react-router-dom";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1240px] m-auto bg-black py-8">
        <div className="footer grid grid-cols-1">
          <div className="m-auto">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                className="hover:cursor-pointer"
                src="/logo.jpg"
                width={120}
                height={80}
              />
            </motion.div>
          </div>
          <div className="flex gap-4 justify-center  text-white">
            <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
              <SocialIcon
                bgColor="white"
                url="https://www.facebook.com/profile.php?id=100047843332654"
              />
            </motion.div>
            <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
              <SocialIcon
                bgColor="white"
                url="https://www.instagram.com/paulkindt/"
              />
            </motion.div>
            <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
              <SocialIcon
                bgColor="white"
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
