import house from "../public/house.webp";
import Image from "next/image";

import pic from "../public/paul-about.jpg";

export default function Section() {
  return (
    <section className="lg:max-w-[1240px] max-w-[80%] mx-auto py-8">
      <div className="flex flex-col-reverse md:flex-row md:gap-24">
        <div className="grid grid-cols-1 content-between">
          <h1 className="font-bold text-4xl text-black uppercase text-center md:text-left py-4">Wie ben ik?</h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            facilis inventore iste quis velit unde labore reiciendis, voluptatum
            neque nihil laboriosam veritatis debitis. Officiis repudiandae,
            quaerat ducimus sunt cumque mollitia.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequatur ut similique nisi ex iusto ea, fuga a eaque aut? Quo,
            iusto qui? Laborum minima consectetur fugit qui voluptatum
            quibusdam?
          </p>

          <button className="py-2 px-4 bg-black text-white font-bold max-w-[30%] justify-self-center md:justify-self-start my-4">
            Lees meer
          </button>
        </div>
        <div className="max-w-[70%] m-auto">
          <Image src={pic} alt="pic"/>
        </div>
      </div>
    </section>
  );
}
