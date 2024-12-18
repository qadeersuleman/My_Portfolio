import Header from "./Header";
import FrontPage from "./FrontPage";
import AboutUs from "./AboutUs";
import Resume from "./Resume";
import Services from "./Services";
import StatsSection from "./StatsSection";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <FrontPage />
      <AboutUs />
      <Resume />
      <Services />
      <StatsSection />
      <Portfolio />
      <Pricing />
      <Faq />
      <Testimonials />
      <ContactUs />
      <Footer />
     
    </div>
  );
};
export default Home;
