import Image from "next/legacy/image";

import placeholder from "../public/house.webp";

export default function About() {
  return (
    <section className="max-w-[85vw] m-auto mt-[2rem]">
      <h1 className="uppercase text-4xl text-center">over ons</h1>
      <div className="flex flex-col md:flex-row gap-8 mt-[2rem] w-[90%] mx-auto">
        <div className="w-[100%] md:w-1/2">
          <div className="m-auto md:m-0">
            <Image src={placeholder} alt="" />
          </div>
        </div>
        <div className="md:w-1/2 mx-auto">
          <div className="m-auto md:m-0">
            <p className="text-sm">
              Als ervaren architect uit Maarkedal hecht ik veel belang aan
              kwaliteit, correctheid en creativiteit in mijn werk. <br /> Mijn
              passie voor architectuur en het creëren van gebouwen en ruimtes
              die zowel esthetisch mooi als functioneel zijn, zorgt ervoor dat
              ik me steeds ten volle inzet voor elk project.
              <br />
              Ik ga altijd nauwkeurig en precies te werk en houd rekening met
              hun specifieke wensen en behoeften. Door goed te luisteren naar
              hun ideeën en behoeften, kan ik een ontwerp op maat maken dat aan
              hun verwachtingen voldoet.
              <br />
              <br />
              <br />
              <span className="font-bold">
                Door mijn creativiteit kan ik unieke ontwerpen maken die perfect
                aansluiten bij de persoonlijkheid en levensstijl van mijn
                klanten.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
