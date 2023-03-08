import Image from 'next/image';
import house from '../public/house.webp';
import Link from 'next/link';
import { motion } from "framer-motion"



export default function Summary() {
    return (

        <>
        <section className=''>
            <div className="max-w-[1240px] m-auto">
            <div className='m-auto text-center'>
                <h1 className='text-3xl font-bold p-4'>BOUWSTIJLEN</h1>
            </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-5 text-white">
                <Link href="/" passHref>
                    <motion.div className='z-1'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1 }}
                            >
                                <Image src={house} alt="projectImg"/>
                    </motion.div>
                    </Link>
                    <Link href="/" passHref>
                    <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1 }}
                            >
                                <Image src={house} alt="projectImg"/>
                    </motion.div>
                    </Link>
                    <Link href="/" passHref>
                    <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1 }}
                            >
                                <Image src={house} alt="projectImg"/>
                    </motion.div>
                    </Link>
                    <Link href="/" passHref>
                    <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1 }}
                            >
                                <Image src={house} alt="projectImg"/>
                    </motion.div>
                    </Link>
                </div>
            </div>    
        </section>
        </>


    )
}