import React from "react";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import QuienesSomos from "./QuienesSomos"; // ✅ sin llaves
import Facilities from "./Facilities";
import FacilitiesGallery from "./FacilitiesGallery";

import HeaderComponent from "./Header";
import FAQComp from "./FAQ";
import Contacto from "./Contacto";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuienesSomos />
      <OurServices />
      <Contacto />
      <Facilities />
      <FacilitiesGallery customHeight={"220px"} />
      <FAQComp />
    </div>
  );
};

export default Home;
