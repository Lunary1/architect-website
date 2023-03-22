import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import SummaryProjectcard from "./SummaryProjectcard";

export default function Summary() {
  return (
    <section id="section-1">
      <div className="w-screen m-auto">
        <div className="my-8">
          <h1 className="text-3xl uppercase text-center text-white">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 px-1 gap-1">
          <SummaryProjectcard
            name="Maheur"
            location="Oudenaarde"
            url="/projecten/1"
            img="maheur"
          />
          <SummaryProjectcard
            name="De Vuyst"
            location="Eine"
            url="/"
            img="devuyst"
          />
          <SummaryProjectcard
            name="Van Caester"
            location="Gent"
            url="/"
            img="vancaester"
          />
          <SummaryProjectcard
            name="Van Overberghe"
            location="Huise"
            url="/"
            img="vanoverberghe"
          />
          <SummaryProjectcard
            name="Remotec"
            location="Gent"
            url="/"
            img="remotec"
          />
          <SummaryProjectcard name="iFire" location="Eke" url="/" img="ifire" />
        </div>
      </div>
    </section>
  );
}
