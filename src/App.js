import "./App.css";
import TopBar from "./components/templates/TopBar";
import Header from "./components/templates/Header";
import HeroSection from "./components/templates/HeroSection";
import Treatments from "./components/templates/Treatments";
import Services from "./components/templates/Services";
import AboutUs from "./components/templates/AboutUs";
import Checkup from "./components/templates/Checkup";
import Testimonial from "./components/templates/Testimonial";
import ContactUs from "./components/templates/ContactUs";
import Footer from "./components/templates/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <Treatments />
      <Services />
      <AboutUs />
      <Checkup />
      <Testimonial />
      <ContactUs />
      <Footer/>
    </>
  );
}

export default App;
