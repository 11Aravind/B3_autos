import { useState } from "react";
import "./ProductCommon.css";
import Table from "../Table/Table";
import LegalStandardNotice from "../LegalStandardNotice/LegalStandardNotice";

const ProductCommon = ({ vechicleDetails }) => {
  const TABLE_1 = {
    height: "30mm",
    Thickness: "5mm",
    space_between: "5mm",
    ratio: "Plate Size: 285mm x 45mm",
    number_plate: "../images/C5A 285mm x 45 mm plate.webp",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  const TABLE_2 = {
    height: "35mm",
    Thickness: "7mm",
    space_between: "5mm",
    ratio: "Plate Size: 200mm x 100mm",
    number_plate: "../images/C5B 200 mm x 100 mm.webp",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  const TABLE_3 = {
    height: "65mm",
    Thickness: "10mm",
    space_between: "10mm",
    ratio: "Plate Size: 500mm x 120mm",
    number_plate: "../images/C5C 500 mmx120 mm plate.webp",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  const TABLE_4 = {
    height: "65mm",
    Thickness: "10mm",
    space_between: "10mm",
    ratio: "Plate Size: 340mm x 200mm",
    number_plate: "../images/C5D 340mm x 200 mm.webp",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  return (
    <section className="vehicle-DetailsPage">
      <>
        {vechicleDetails !== null ? (
          <>
            <div className="vechicle-details">
              <Table vechicleDetails={vechicleDetails} />
              <div className="vehicle-image">
                <img
                  src={vechicleDetails.vehicle_img}
                  alt={vechicleDetails.vehicle_img}
                />
              </div>
            </div>
            {/* bottom thing */}
       <LegalStandardNotice/>
          </>
        ) : (
          // "CONSTRUCTION EQUIPMENT VEHICLES"
          <>
              <h1 className="table-main-heading">CONSTRUCTION EQUIPMENT VEHICLES</h1>
              <h3 className="table-sub-heading">All Dimensions " NOT LESS THAN "</h3>
            <div className="table-conteiner">
              <Table vechicleDetails={TABLE_1} />
              <Table vechicleDetails={TABLE_2} />
              <Table vechicleDetails={TABLE_3} />
              <Table vechicleDetails={TABLE_4} />
            </div>
              <LegalStandardNotice/>
          </>

        )}
      </>
    </section>
  );
};

export default ProductCommon;
