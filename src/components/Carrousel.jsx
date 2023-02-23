import { useState, useEffect } from "react";

const imgCarousel = [
  "https://res.cloudinary.com/dxwzyjefd/image/upload/v1677125847/sprint4/promo-banners/starbucks.png",
  "https://res.cloudinary.com/dxwzyjefd/image/upload/v1677125847/sprint4/promo-banners/srwok.png",
  "https://res.cloudinary.com/dxwzyjefd/image/upload/v1677125847/sprint4/promo-banners/frisby.png",
  "https://res.cloudinary.com/dxwzyjefd/image/upload/v1677125847/sprint4/promo-banners/dominos.jpg",
  "https://res.cloudinary.com/dxwzyjefd/image/upload/v1677125847/sprint4/promo-banners/mcdonalds.jpg",
];

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const next = () => {
    setCurr((curr) => (curr === imgCarousel.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  const imgSrc = imgCarousel[curr];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
      <img
        src={imgSrc}
        alt={`Slide ${curr}`}
        className="w-full h-32 rounded-xl object-cover md:h-40 lg:h-60"
      />
      <img
        src={imgCarousel[(curr + 1) % imgCarousel.length]}
        alt={`Slide ${(curr + 1) % imgCarousel.length}`}
        className="w-full h-32 hidden rounded-xl object-cover md:h-40 lg:h-60 md:block"
      />
    </div>
  );
}
