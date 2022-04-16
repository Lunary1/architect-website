import Image from "next/image";
import Link from "next/link";
import gif from "../public/bouw_gif.gif"


export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Paul Kindt</h1>
          <p className="mb-5">Architectenkantoor actief in de Vlaamse Ardennen. </p>
          <Link href={"/contact"}><a><button className="btn glass">neem contact op</button></a></Link>
        </div>
      </div>
    </div>
  )
}
