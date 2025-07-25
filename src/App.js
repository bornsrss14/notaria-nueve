import "./Styles/Hero.css";
import Footer from "./components/Layout/Footer";
import PrivacyNotice from "./components/Core/PrivacyNotice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import Home from "./components/Layout/Home";
import HeaderComponent from "./components/Layout/Header";
import FormContacto from "./components/Layout/FormContacto";
import NuestraHistoria from "./components/Layout/OurStory";
import ServiciosNotariales from "./components/Layout/ServiciosNotariales";
import RelatedArticleCom from "./components/Core/RelatedArticle";
import NosotrosComp from "./components/Layout/NosotrosComp";
import { ScrollToTop } from "./components/hooks/ScrollToTop";
import DetailedArticle from "./components/Core/DetailedArticle";
import NotFound from "./components/Core/NotFound";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/formulario-contacto" element={<FormContacto />}></Route>
        <Route path="nuestra-historia" element={<NuestraHistoria />}></Route>
        <Route path="/servicios/:id" element={<ServiciosNotariales />}></Route>

        <Route
          path="articulos-notariales"
          element={<RelatedArticleCom />}
        ></Route>
        <Route path="sobre-nosotros" element={<NosotrosComp />}></Route>
        <Route
          path="/detalle-articulo/:id"
          element={<DetailedArticle />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
