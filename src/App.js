import HeroSection from "./components/Layout/HeroSection";
import Header from "./components/Layout/Header";
import "./Styles/Hero.css";
import WhoWeAreSection from "./components/Layout/WhoWeAreSection ";
import OurServices from "./components/Layout/OurServices";
import Contacto from "./components/Layout/Contacto";
import Footer from "./components/Layout/Footer";
import PrivacyNotice from "./components/Core/PrivacyNotice";
import FAQ from "./components/Layout/FAQ";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="avance"></div>
      <HeroSection />
      <WhoWeAreSection />
      <OurServices />
      <Contacto />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
