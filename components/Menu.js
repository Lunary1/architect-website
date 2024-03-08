import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  console.log(hoveredItem);

  const items = ["home", "projecten", "over ons", "contact", "nieuws"];

  return (
    <nav>
      <div id="menu" className="h-[100vh] overflow-hidden">
        <div
          id="menu-items"
          className="flex justify-items-center flex-col relative z-2"
        >
          {items.map((item, index) => (
            <div
              className="menu-item"
              key={index}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(item)}
            >
              <Link href={`/${item}`}>
                <a>{item}</a>
              </Link>
            </div>
          ))}
        </div>
        <motion.div
          key={items.indexOf(hoveredItem) + 1}
          animate={{ opacity: [0, null, 0.3], scale: [ 1, 1.05] }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className={
            hoveredItem ? [`background-${items.indexOf(hoveredItem) + 1}`] : "background"
          }
        ></motion.div>
      </div>
    </nav>
  );
}
