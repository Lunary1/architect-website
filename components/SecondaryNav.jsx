import React from "react";
import Link from "next/link";

const secondaryNav = () => {
  return (
    <div className="flex justify-between p-2 font-bold text-sm">
      <div>HOUSING PROJECTS</div>
      <div className="">
        <div>GRID VIEW</div>
        <div>SLIDER VIEW</div>
      </div>
      <div>
        <Link href={"/"}>MENU</Link>
      </div>
    </div>
  );
};

export default secondaryNav;
