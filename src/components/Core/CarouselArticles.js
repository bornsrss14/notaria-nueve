import React, { useEffect, useState } from "react";

export const CarouselArticles = () => {
  const slidesData = [
    { id: 1, text: "Slide 45", color: "crimson" },
    { id: 2, text: "Slide 45", color: "teal" },
    { id: 3, text: "Slide 67", color: "orange" },
    { id: 4, text: "Slide 78", color: "rebeccapurple" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 6000); // cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="background-articles">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{ backgroundColor: slide.color }}
          >
            {slide.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselArticles;
