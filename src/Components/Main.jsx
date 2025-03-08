import About from "./About/About";
import Services from "./About/Services";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Portfolio from "./Project/Portfolio";
import Footer from "./About/Footer";
import ContactUs from "./About/ContactUs";
import ScrollTop from "./Home/ScollTop";
const Main = () => {
  return (
    <div>

      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
      <ScrollTop />
      
      {/* <Header />
            <About />
            <Service />
            <Work />
            <Blog />
            <Contact />
            <Footer /> */}
    </div>
  );
};

export default Main;
