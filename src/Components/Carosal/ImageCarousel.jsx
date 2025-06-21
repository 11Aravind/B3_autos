import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import banner1 from "../../assets/A1_banner.jpg";
import banner2 from "../../assets/A2_banner.jpg"; 
import banner3 from "../../assets/A3_banner.jpg";
const banners = [
  {
    path: banner1,
    alt: "Slider 1"
  },
  {
    path: banner2,
    alt: "Slider 2"
  },
  {
    path: banner3,
    alt: "Slider 3"
  }
];

const ImageCarousel = () => {
  const [key, setKey] = useState(0);

  const handleChange = (index) => {
    if (index === banners.length) {
      setKey(prev => prev + 1);
    }
  };

  const carouselSettings = {
    key,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    onChange: handleChange,
    interval: 3000,
    transitionTime: 600
  };

  return (
    <Carousel {...carouselSettings}>
      {banners.map(({ path, alt }, index) => (
        <div key={`slide-${index}`}>
          <img src={path} alt={alt} loading="lazy" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;