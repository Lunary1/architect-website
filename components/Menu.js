import Image from "next/image";
import Link from "next/link";

const Menu = ({ project }) => {
  return (
    <nav>
      <div id="menu">
        <div id="menu-items">
          <Link href="/home">
          <a className="menu-item">
            Home
          </a>
          </Link>
          <a className="menu-item">
            Projecten
          </a>
          <a className="menu-item">
            Over Ons
          </a>
          <a className="menu-item">
            Contact
          </a>
          <a className="menu-item">
            Nieuws
          </a>
          <div id="menu-background-pattern"></div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
