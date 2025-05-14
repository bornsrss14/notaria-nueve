import "./Styles/Hero.css";
import Footer from "./components/Layout/Footer";
import PrivacyNotice from "./components/Core/PrivacyNotice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import Home from "./components/Layout/Home";
import HeaderComponent from "./components/Layout/Header";
import DirectorioComp from "./components/Layout/Directorio";
import NuestraHistoria from "./components/Layout/OurStory";
import DesarrolloInmobiliario from "./components/Layout/DesarrolloInmobiliario";
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

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aviso-de-privacidad" element={<PrivacyNotice />}></Route>
        <Route path="directorio" element={<DirectorioComp />}></Route>
        <Route path="nuestra-historia" element={<NuestraHistoria />}></Route>
        <Route
          path="desarrollo-inmobiliario"
          element={<DesarrolloInmobiliario />}
        ></Route>
        <Route
          path="/sociedades-y-poderes"
          element={<SociedadesYPoderes />}
        ></Route>
        <Route path="vivienda" element={<Vivienda />}></Route>
        <Route
          path="nuestros-servicios"
          element={<NuestrosServicios />}
        ></Route>{" "}
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
