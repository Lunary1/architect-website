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
            key={1}
            name="Maheur"
            location="Oudenaarde"
            url="/projecten/1"
            img="maheur"
          />
          <SummaryProjectcard
            key={1}
            name="De Vuyst"
            location="Eine"
            url="/"
            img="devuyst"
          />
          <SummaryProjectcard
            key={1}
            name="Van Caester"
            location="Gent"
            url="/"
            img="vancaester"
          />
          <SummaryProjectcard
            key={1}
            name="Van Overberghe"
            location="Huise"
            url="/"
            img="vanoverberghe"
          />
          <SummaryProjectcard
            key={1}
            name="Remotec"
            location="Gent"
            url="/"
            img="remotec"
          />
          <SummaryProjectcard
            key={1}
            name="iFire"
            location="Eke"
            url="/"
            img="ifire"
          />
        </div>
      </div>
    </section>
  );
}
