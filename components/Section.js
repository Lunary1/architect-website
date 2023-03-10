import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import pic from "../public/paul-about.jpg";

export default function Section() {
  return (
    <section className="lg:max-w-[1240px] max-w-[80%] mx-auto py-8 mt-24">
      <div className="flex flex-col-reverse md:flex-row md:gap-24">
        <div className="grid grid-cols-1 content-between">
          <div className="max-w-[80%]">
            <h1 className="font-bold text-3xl text-black uppercase text-center md:text-left py-4">
              Wie zijn wij?
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium facilis inventore iste quis velit unde labore
              reiciendis, voluptatum neque nihil laboriosam veritatis debitis.
              Officiis repudiandae, quaerat ducimus sunt cumque mollitia.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consequatur ut similique nisi ex iusto ea, fuga a eaque aut? Quo,
              iusto qui? Laborum minima consectetur fugit qui voluptatum
              quibusdam?
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="px-10 py-3 bg-black text-white font-bold max-w-[60%] justify-self-center md:justify-self-start my-4"
          >
            Lees meer
          </motion.button>
        </div>
        <div className="max-w-[70%] m-auto">
          <Image src={pic} alt="pic" height={1000} />
        </div>
      </div>
    </section>
  );
}
