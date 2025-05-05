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

function App() {
  return (
    <div className="App">
      <Header />
      <div className="avance "></div>
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
