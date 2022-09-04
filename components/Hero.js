import Image from "next/image";
import Link from "next/link";
import logo2 from "../public/logo.png"


export default function Hero() {
  return (
    <div className="hero h-screen text-white">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Image src={logo2} />
          <Link href={"/contact"}><a><button className="btn btn-outline text-white mt-4">neem contact op</button></a></Link>
        </div>
      </div>
    </div>
  )
}
