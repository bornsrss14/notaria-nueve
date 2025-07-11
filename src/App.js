import "./Styles/Hero.css";
import Footer from "./components/Layout/Footer";
import PrivacyNotice from "./components/Core/PrivacyNotice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import Home from "./components/Layout/Home";
import HeaderComponent from "./components/Layout/Header";
import DirectorioComp from "./components/Layout/Directorio";
import NuestraHistoria from "./components/Layout/OurStory";
import ServiciosNotariales from "./components/Layout/ServiciosNotariales";
import SociedadesYPoderes from "./components/Layout/SociedadesYPoderes";
import Vivienda from "./components/Layout/Vivienda";
import NuestrosServicios from "./components/Layout/NuestrosServicios";
import RelatedArticleCom from "./components/Core/RelatedArticle";
import NosotrosComp from "./components/Layout/NosotrosComp";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <Router>
      <HeaderComponent />
      {/* Scroll bar puedes dejarla aquí si es global */}
      <motion.div
        id="scroll-indicator"
        style={{
          maxWidth: "100%",
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          height: 10,
          originX: 0,
          backgroundColor: "blue",
          overflow: "hidden",
        }}
      ></motion.div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aviso-de-privacidad" element={<PrivacyNotice />}></Route>
        <Route path="directorio" element={<DirectorioComp />}></Route>
        <Route path="nuestra-historia" element={<NuestraHistoria />}></Route>
        <Route path="/servicios/:id" element={<ServiciosNotariales />}></Route>

        <Route
          path="articulos-notariales"
          element={<RelatedArticleCom />}
        ></Route>
        <Route path="sobre-nosotros" element={<NosotrosComp />}>
          {" "}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
