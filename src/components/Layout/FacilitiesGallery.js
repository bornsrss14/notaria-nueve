import React from "react";

const FacilitiesGallery = () => {
  const imagesGallery = [
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-1.jpg?alt=media&token=f5191322-57d8-40cd-8ca7-bc4d1fa260d8",
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-2.jpg?alt=media&token=1a46f053-9278-4e4f-a91f-6a5c38e518f6",
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-3.jpg?alt=media&token=d8565b6c-3853-4133-b350-e45524c74215",
    "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Finstalacion-4.jpg?alt=media&token=0bb7b6ec-6a99-4a61-a571-5e2a36cc3942",
  ];
  return (
    <div>
      <section id="facilities-gallery">
        <div className="gallery-grid">
          {imagesGallery.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Instalación ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacilitiesGallery;
