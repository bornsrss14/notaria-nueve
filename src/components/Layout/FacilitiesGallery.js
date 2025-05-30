import React, { useRef, useState } from "react";
import BlurImage from "./BlurImage"; // Ajusta la ruta si es distinto

const imagesGallery = [
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-1.jpg?alt=media&token=f5191322-57d8-40cd-8ca7-bc4d1fa260d8",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-4.jpg?alt=media&token=0bb7b6ec-6a99-4a61-a571-5e2a36cc3942",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-4.jpg?alt=media&token=0bb7b6ec-6a99-4a61-a571-5e2a36cc3942",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-4.jpg?alt=media&token=0bb7b6ec-6a99-4a61-a571-5e2a36cc3942",
  },
  {
    lowRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1",
    highRes:
      "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
  },
];

const FacilitiesGallery = () => {
  const scrollRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const openModal = (highResUrl) => {
    setModalSrc(highResUrl);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalSrc("");
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Scroll negativo por un "ancho de vista" (una página)
    container.scrollBy({
      left: -container.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Scroll positivo por un "ancho de vista"
    container.scrollBy({
      left: container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="gallery-wrapper">
        {/* Botón izquierda */}
        <button className="gallery-button left" onClick={scrollLeft}>
          &#8249;
        </button>

        {/* Contenedor de scroll */}
        <div ref={scrollRef} className="gallery-container">
          {imagesGallery.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(img.highRes)}
            >
              <BlurImage
                lowRes={img.lowRes}
                highRes={img.highRes}
                alt={`Instalación ${index + 1}`}
                height="220px"
              />
            </div>
          ))}
        </div>

        {/* Botón derecha */}
        <button className="gallery-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>

      {/* ---------- Modal ---------- */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={
              (e) => e.stopPropagation() /* Evita cerrar al hacer clic dentro */
            }
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={modalSrc} alt="Instalación en grande" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitiesGallery;
