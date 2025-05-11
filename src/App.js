import HeroSection from "./components/Layout/HeroSection";
import Header from "./components/Layout/Header";
import "./Styles/Hero.css";
import QuienesSomos from "./components/Layout/QuienesSomos"; // ✅ sin llaves

import OurServices from "./components/Layout/OurServices";
import Contacto from "./components/Layout/Contacto";
import Footer from "./components/Layout/Footer";
import PrivacyNotice from "./components/Core/PrivacyNotice";
import FAQ from "./components/Layout/FAQ";
import Facilities from "./components/Layout/Facilities";
import FacilitiesGallery from "./components/Layout/FacilitiesGallery";
import { motion, useScroll } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          height: 10,
          originX: 0,
          backgroundColor: "blue",
        }}
      ></motion.div>
      <Header />
      <HeroSection />
      <OurServices />
      <QuienesSomos />
      <Contacto />
      <Facilities />
      <FacilitiesGallery />
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;
