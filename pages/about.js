import paul from "../public/paul-about.jpg"
import Image from 'next/image'
import { useEffect, useState } from "react";

function About() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div class="grid py-36 gap-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="left py-20 text-white">
          <div className="header-title mb-24">
            <progress class="progress progress-info w-56" value={scrollPosition} max="1000"></progress>
            <h1 className="text-5xl">Over Architect Kindt</h1>
            <h2 className="text-l mt-4">The story behind</h2>
          </div>
          <p className="text-md leading-relaxed whitespace-pre-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia consectetur animi dolor velit eius vitae eum exercitationem dolorum? Dolore labore laudantium ea earum aut quis sit vitae voluptates architecto.</p>
          <p className="text-md leading-relaxed whitespace-pre-wrap mt-4">Deleniti, repudiandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ea, alias quas expedita dolorum dolore molestias reprehenderit sint eius laboriosam laudantium aut quaerat mollitia deserunt quam, libero odio similique sequi?</p>


        </div>
        <div className="right">
          <Image src={paul} width={800} height={800} />
        </div>
      </div>
    </div>
  )
}

export default About