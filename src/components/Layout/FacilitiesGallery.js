import React from "react";
import BlurImage from "./BlurImage";

const FacilitiesGallery = () => {
  const imagesGallery = [
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-1.jpg?alt=media&token=f5191322-57d8-40cd-8ca7-bc4d1fa260d8",
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-4.jpg?alt=media&token=0bb7b6ec-6a99-4a61-a571-5e2a36cc3942",
  ];
  return (
    <div>
      <section id="facilities-gallery">
        <div className="gallery-grid">
          {imagesGallery.map((srcGallery, index) => (
            <div key={index} className="gallery-item">
              {/* <img
                loading="lazy"
                src={srcGallery}
                alt={`Instalación ${index + 1}`}
              /> */}
              <BlurImage
                lowRes="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1"
                highRes={srcGallery}
                alt="Banner Notaría"
                height="220px"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacilitiesGallery;
