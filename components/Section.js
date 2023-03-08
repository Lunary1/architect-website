import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import pic from "../public/paul-about.jpg";

export default function Section() {
  return (
    <section className="lg:max-w-[1240px] max-w-[80%] mx-auto py-8">
      <div className="flex flex-col-reverse md:flex-row md:gap-24">
        <div className="grid grid-cols-1 content-between">
          <h1 className="font-bold text-4xl text-black uppercase text-center md:text-left py-4">
            Wie ben ik?
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            facilis inventore iste quis velit unde labore reiciendis, voluptatum
            neque nihil laboriosam veritatis debitis. Officiis repudiandae,
            quaerat ducimus sunt cumque mollitia.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequatur ut similique nisi ex iusto ea, fuga a eaque aut? Quo,
            iusto qui? Laborum minima consectetur fugit qui voluptatum
            quibusdam?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="px-10 py-3 bg-black text-white font-bold max-w-[50%] justify-self-center md:justify-self-start my-4"
          >
            Lees meer
          </motion.button>
        </div>
        <div className="max-w-[70%] m-auto">
          <Image src={pic} alt="pic" />
        </div>
      </div>

      <div>
        <div className="max-w-[50%]">
          <h1 className="">Onze laatste projecten</h1>
          <p>
            Our many works have also resulted in various awards as the best
            architect in 2022
          </p>
        </div>
        <div>
          <div className="grid grid-cols-6">
            <div className="col-start-1 col-end-3">
              <ul className="flex justify-between">
                <li className="hover:border-black hover:border-b-2 transition ease-in">
                  2023
                </li>
                <li className="hover:border-black hover:border-b-2 transition ease-in">
                  2022
                </li>
                <li className="hover:border-black hover:border-b-2 transition ease-in">
                  2021
                </li>
                <li className="hover:border-black hover:border-b-2 transition ease-in">
                  2020
                </li>
                <li className="hover:border-black hover:border-b-2 transition ease-in">
                  2019
                </li>
              </ul>
            </div>
            <div className="col-start-6">
              <Link href="/projecten">See all projects</Link>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-rows-2 grid-cols-5 grid-flow-col gap-4">
          </div>
        </div>
      </div>
    </section>
  );
}
