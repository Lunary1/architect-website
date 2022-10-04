import Image from "next/image";
import Link from "next/link";
import logo2 from "../public/logo.png"
import down from "../public/down.svg"


export default function Hero() {
  return (
    <div className="hero text-white">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          
        </div>
        <div className="arrow">
          <figure>
            <Image src={down} height={20}/>
          </figure>
        </div>
      </div>

    </div>
  )
}
