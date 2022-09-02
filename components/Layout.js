import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Featured from "./Featured";

const Layout = ({ children }) => {
  return (
    <>
        <Meta />
        <header className="header">
          <Navbar />
          <Featured />
        </header>
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
};

export default Layout