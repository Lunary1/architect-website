import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import SummaryProjectcard from "./SummaryProjectcard";

export default function Summary() {
  return (
    <section id="section-1">
      <div className="w-screen m-auto">
        <div className="m-auto text-3xl my-8 uppercase text-center text-white">
          projects
        </div>
        <div className="grid lg:grid-cols-3 px-1 grid-cols-2 gap-2 text-white">
          <SummaryProjectcard name="Maheur" location="Oudenaarde" url="/projecten/1" />
          <SummaryProjectcard name="De Vuyst" location="Eine" url="/" />
          <SummaryProjectcard name="Van Caester" location="Gent" url="/" />
          <SummaryProjectcard name="Van Overberghe" location="Huise" url="/" />
          <SummaryProjectcard name="Remotec" location="Gent" url="/" />
          <SummaryProjectcard name="iFire" location="Eke" url="/" />
        </div>
      </div>
    </section>
  );
}
