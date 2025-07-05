import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/A1_banner.jpg";
import banner2 from "@/assets/banner_02 .jpg";
import banner3 from "@/assets/banner_03.jpg";
import banner4 from "@/assets/A3_banner.jpg";

import "./slider.css"; 

const banners = [
  { path: banner1, alt: "Slider 1" },
  { path: banner2, alt: "Slider 2" },
  { path: banner3, alt: "Slider 3" },
  { path: banner4, alt: "Slider 4" },
];

const ImageCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {banners.map((banner, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={banner.path}
                alt={banner.alt}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__prev" onClick={scrollPrev}>‹</button>
      <button className="embla__next" onClick={scrollNext}>›</button>
    </div>
  );
};

export default ImageCarousel;
