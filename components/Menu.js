import Image from "next/image";
import Link from "next/link";

const Menu = ({ project }) => {
  return (
    <nav>
      <div id="menu" className="h-[100vh] overflow-hidden">
        <div
          id="menu-items"
          className="flex justify-items-center flex-col relative z-2"
        >
          <Link href="/home">
            <a className="menu-item">Home</a>
          </Link>
          <Link href="/projecten">
            <a className="menu-item">Projecten</a>
          </Link>
          <Link href="/over_ons">
            <a className="menu-item">Over Ons</a>
          </Link>
          <Link href="/contact">
            <a className="menu-item">Contact</a>
          </Link>
          <Link href="/nieuws">
            <a className="menu-item">Home</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
