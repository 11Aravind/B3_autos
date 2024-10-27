// Import the Carousel styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";


// const ImageCarousel = () => {
//     const [key, setKey] = useState(0);

//     const handleChange = (index) => {
//         if (index === /* last index */) {
//             setKey((prevKey) => prevKey + 1);
//         }
//     };
//     return(
//     <Carousel
//     key={key}
//     showThumbs={false}
//     showStatus={false}
//     infiniteLoop
//     autoPlay
//     onChange={handleChange}
//     interval={3000}
//     transitionTime={600}
//     >
//         <div>
//             <img src="images/banner.jpg" alt="Slide 1" />
//             {/* <p className="legend">Slide 1</p> */}
//         </div>
//         <div>
//             <img src="images/banner.jpg" alt="Slide 2" />
//             {/* <p className="legend">Slide 2</p> */}
//         </div>
//         <div>
//             <img src="images/banner.jpg" alt="Slide 3" />
//             {/* <p className="legend">Slide 3</p> */}
//         </div>
//     </Carousel>
// );
// }

// export default ImageCarousel;

const ImageCarousel = () => {
  const [key, setKey] = useState(0);

  const handleChange = (index) => {
    if (index === 3) {
      setKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <Carousel
      key={key}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      onChange={handleChange}
      interval={3000}
      transitionTime={600}
    >
      <div>
        <img src="images/banner.jpg" alt="Slide 1" />
        {/* <p className="legend">Slide 1</p> */}
      </div>
      <div>
        <img src="images/banner.jpg" alt="Slide 2" />
        {/* <p className="legend">Slide 2</p> */}
      </div>
      <div>
        <img src="images/banner.jpg" alt="Slide 3" />
        {/* <p className="legend">Slide 3</p> */}
      </div>
    </Carousel>
  );
};
export default ImageCarousel;
