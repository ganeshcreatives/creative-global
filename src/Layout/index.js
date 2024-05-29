import Header from "../Components/comman/Header";
import Footer from "../Components/comman/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
