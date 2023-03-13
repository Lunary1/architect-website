import React from "react";
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
      <div className="max-w-[1240px] m-auto py-16 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700">
        <div className="">
          <Image
            className="hover:cursor-pointer"
            src="/logo.jpg"
            width={120}
            height={80}
          />
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <h2 className="font-bold uppercase pb-2 text-sm text-black"></h2>
          <div className="flex gap-6 md:w-[75%] text-black">
            <Link className=" hover:cursor-pointer" href="">
              <SocialIcon
                bgColor="black"
                url="https://www.facebook.com/profile.php?id=100047843332654"
              />
            </Link>
            <Link className=" hover:cursor-pointer" href="">
              <SocialIcon
                bgColor="black"
                url="https://www.instagram.com/paulkindt/"
              />
            </Link>
            <Link className=" hover:cursor-pointer" href="">
              <SocialIcon
                bgColor="black"
                url="https://architect-website-five.vercel.app/"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between lg:justify-evenly lg:col-span-2">
          <div>
            <h6 className="font-medium text-black uppercase">sitemap</h6>
            <ul>
              <li className="py-2 text-sm">Home</li>
              <li className="py-2 text-sm">Projecten</li>
              <li className="py-2 text-sm">Over Ons</li>
              <li className="py-2 text-sm">Contact</li>
              <li className="py-2 text-sm">Nieuws</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-medium text-black uppercase">Legal</h6>
            <ul>
              <Link href="/">
                <li className="py-2 text-sm hover:cursor-pointer">Claim</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-sm hover:cursor-pointer">Policy</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-sm hover:cursor-pointer">Terms</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
