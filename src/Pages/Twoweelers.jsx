import { useParams } from "react-router-dom";
import ProductCommon from "../Components/ProductHSRP/ProductCommon";
import BookHSRP from "./BookHSRP/BookHSRP";
import Gallery from "../Components/Gallary/Gallery";

const Twoweelers = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  console.log(id);

  const TWO_WHEELS = {
    height: "30mm",
    Thickness: "5mm",
    space_between: "5mm",
    ratio: "Plate Size: 285mm x 45mm",
    vehicle_img: "../images/two-wheeler.png",
    table_mainhedding:"TWO WHEELERS: MOTORCYCLE FRONT",
    table_sub_headding:"All Dimensions ' NOT LESS THAN '"
  };

  const TWO_AND_THREE = {
    height: "40mm",
    Thickness: "7mm",
    space_between: "5mm",
    ratio: "Plate Size: 200mm x 100mm",
    vehicle_img: "../images/two-three-wheeler.png",
     table_mainhedding:"TWO WHEELERS & THREE WHEELERS",
    table_sub_headding:"CMVR: Rule 50 & 51 : All Dimensions ' NOT LESS THAN '"
  };
  const FOUR_WHEEL = {
    height: "65mm",
    Thickness: "10mm",
    space_between: "10mm",
    ratio: "Plate Size: 500mm x 120mm",
    vehicle_img: "../images/four-wheeler.png",
     table_mainhedding:"LMV : FOUR WHEELERS",
    table_sub_headding:""
  };
  const MEDIUM_AND_HEAVY = {
    height: "65mm",
    Thickness: "10mm",
    space_between: "10mm",
    ratio: "Plate Size: 340mm x 200mm",
    vehicle_img: "../images/heavy-wheeler.png",
     table_mainhedding:"MEDIUM, HEAVY COMMERCIAL VEHICLE & TRAILOR COMBINATION",
    table_sub_headding:"All Dimensions ' NOT LESS THAN '"
  };

  const rendercontent = () => {
    switch (numericId) {
      case 1:
        return TWO_WHEELS;
      case 2:
        return TWO_AND_THREE;
      case 3:
        return FOUR_WHEEL;
      case 4:
        return MEDIUM_AND_HEAVY;
        default:
          return null
    }
  };
  return (
    <>
      <section>
        <div className="page-main-heading-container">
          <div className="page-main-heading">FORM & COMPLIANCE GUIDE</div>
        </div>
      </section>
      <ProductCommon vechicleDetails={rendercontent()} />
      <Gallery/>
      <BookHSRP/>

    </>
  );
};
export default Twoweelers;
