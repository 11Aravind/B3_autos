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
    number_plate: "../images/1.png",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  const TABLE_2 = {
    height: "35mm",
    Thickness: "7mm",
    space_between: "5mm",
    ratio: "Plate Size: 200mm x 100mm",
    number_plate: "../images/1.png",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  const TABLE_3 = {
    height: "65mm",
    Thickness: "10mm",
    space_between: "10mm",
    ratio: "Plate Size: 500mm x 120mm",
    number_plate: "../images/1.png",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  const TABLE_4 = {
    height: "65mm",
    Thickness: "10mm",
    space_between: "10mm",
    ratio: "Plate Size: 340mm x 200mm",
    number_plate: "../images/1.png",
    table_mainhedding: "",
    table_sub_headding: "",
  };
  return (
    <section className="vehicle-DetailsPage">
      <>
        {vechicleDetails !== null ? (
          <>
            <div className="vechicle-details">
              {/* <div className="vehicle-diamenstion">
          <h3 className="table-main-headding">{vechicleDetails.table_mainhedding}</h3>
          <h6 className="table-sub-headding" >{vechicleDetails.table_sub_headding}</h6>
          <div className="grid-container">
            <div class="grid-table">
              <div class="cell cell-1">
              {vechicleDetails.ratio}
                <img src="images/4.png" alt="" />
                </div>
              <div class="cell cell-2">Letters & Numerals
              </div>
              <div class="cell cell-3">Height(H)</div>
              <div class="cell cell-4">{vechicleDetails.height}</div>
              <div class="cell cell-5">Thickness(T)	</div>
              <div class="cell cell-6">{vechicleDetails.Thickness}</div>
              <div class="cell cell-7">Space Between(S)	</div>
              <div class="cell cell-8">{vechicleDetails.space_between}</div>
            </div>
          </div>
        </div> */}
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
