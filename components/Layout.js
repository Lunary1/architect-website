// components/layout.js

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="text-white">{children}</main>
      <Footer />
    </>
  );
}
