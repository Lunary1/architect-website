import Image from "next/image";
import Link from "next/link";
import gif from "../public/bouw_gif.gif"


export default function Hero() {
  return (
  <div className="flex mr-0">
    <div className="w-1/3"></div>
      <div className="w-2/3 relative">
        <Image className="" src={gif} width={1700} height={900} />
        <div className="absolute -left-96 top-1/3">
          <h1 className="text-7xl font-semibold">Architect </h1>
          <h1 className="text-5xl mt-3 font-semibold">Paul Kindt</h1>
          <button className="mt-10 bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Contacteer mij!
          </button>
        </div>
      </div>
  </div>
  )
}
