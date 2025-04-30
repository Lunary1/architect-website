import Image from "next/image";

import placeholder from "../public/house.webp";

export default function About() {
  return (
    <section className="max-w-[90vw] mx-auto mt-8 px-4">
      {" "}
      {/* Added px-4 for padding */}
      <h1 className="uppercase text-2xl text-center md:text-4xl"></h1>
      <div className="flex flex-col gap-6 mt-6 md:flex-row md:gap-8 md:w-[85%] md:mx-auto">
        <div className="w-full md:w-1/2">
          <div className="mx-auto">
            <Image
              src={placeholder}
              alt="Architectural design"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mx-auto">
            <p className="text-sm leading-relaxed md:text-base">
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
