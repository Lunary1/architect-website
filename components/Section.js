import Image from "next/image";

import placeholder from "../public/house.webp";

export default function Section() {
  return (
    <section>
      <div className="relative w-[100%] md:h-[75vh] h-[300px] overflow-hidden">
        <Image src={placeholder} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="max-w-[85%] m-auto pt-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-[100%] md:w-1/2">
            <div className="w-[85%] m-auto md:m-0">
              <Image src={placeholder} alt="" />
            </div>
          </div>
          <div className="md:w-1/2 m-auto pt-8 md:pt-0">
            <div className="w-[80%] m-auto md:m-0">
              <h2 className="uppercase text-3xl md:text-4xl">
                over ons
              </h2>
              <p className="pt-8 md:pt-16 text-sm">
                Als ervaren architect uit Maarkedal hecht ik veel belang aan
                kwaliteit, correctheid en creativiteit in mijn werk. <br /> Mijn
                passie voor architectuur en het creëren van gebouwen en ruimtes
                die zowel esthetisch mooi als functioneel zijn, zorgt ervoor dat
                ik me steeds ten volle inzet voor elk project.
                <br />
                Ik ga altijd nauwkeurig en
                precies te werk en houd rekening met hun specifieke wensen en
                behoeften. Door goed te luisteren naar hun ideeën en behoeften,
                kan ik een ontwerp op maat maken dat aan hun verwachtingen
                voldoet.
                <br />
                <br />
                <br />
                <span className="font-bold">
                  Door mijn creativiteit kan ik unieke ontwerpen maken die
                  perfect aansluiten bij de persoonlijkheid en levensstijl van
                  mijn klanten.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
