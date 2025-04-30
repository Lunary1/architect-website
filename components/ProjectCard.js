import React from "react";
import Link from "next/link";
import Image from "next/image";

function SummaryProjectcard(props) {
  return (
    <div className="hover:cursor-pointer">
      <Link href={`${props.url}`} passHref>
        <figure className="relative group transition ease-in-out delay-100 grayscale-[100%] hover:grayscale-[0%]">
          <Image
            className={`relative`}
            src={`${props.img}`}
            alt={`${props.name}`}
            width={1920}
            height={1080}
            loading="lazy"
            quality={80}
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
          <figcaption className="absolute bottom-0 p-4 sm:p-8 opacity-0 group-hover:opacity-[85] transition ease-in-out delay-150 text-white">
            {/* <p className="text-xs sm:text-sm font-sans">{props.location}</p> */}
            {/* <h2 className="text-sm sm:text-lg">{props.name}</h2> */}
          </figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default SummaryProjectcard;
