import Image from "next/image";
import house from "../public/house.webp";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section id="section-1">
      <div className="max-w-[1240px] m-auto">
        <div className="m-auto text-center"></div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 text-white">
          <Link href="/" passHref>
            <motion.div
              className="z-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={house} alt="projectImg" />
            </motion.div>
          </Link>
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={house} alt="projectImg" />
            </motion.div>
          </Link>
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={house} alt="projectImg" />
            </motion.div>
          </Link>
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={house} alt="projectImg" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
