import React from "react";
import Link from "next/link";
import Image from "next/image";

function SummaryProjectcard({ url, img, name }) {
  return (
    <Link href={url} passHref aria-label={`View details for ${name}`}>
      <Image
        className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-500"
        src={img}
        alt={name}
        width={1920}
        height={1080}
        quality={80}
        loading="lazy"
      />
    </Link>
  );
}

export default SummaryProjectcard;
