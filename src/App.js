import HeroSection from "./components/Layout/HeroSection";
import Header from "./components/Layout/Header";
import "./Styles/Hero.css";
import WhoWeAreSection from "./components/Layout/WhoWeAreSection ";
import OurServices from "./components/Layout/OurServices";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="avance"></div>
      <HeroSection />
      <WhoWeAreSection />
      <OurServices />
    </div>
  );
}

export default App;
