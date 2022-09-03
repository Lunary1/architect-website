import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Featured from "./Featured";

const Layout = ({ children }) => {
  return (
    <>
        <Meta />
        <main>
            {children}
            <Footer />
        </main>
    </>
  );
};

export default Layout