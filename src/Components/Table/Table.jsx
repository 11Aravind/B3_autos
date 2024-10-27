import "./table.css"

import { useState } from "react";

const ProductCommon = ({ vechicleDetails }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="vehicle-diamenstion">
     {vechicleDetails.table_mainhedding &&  <h3 className="table-main-heading">{vechicleDetails.table_mainhedding}</h3>}
     {vechicleDetails.table_sub_headding && <h6 className="table-sub-heading">{vechicleDetails.table_sub_headding}</h6>}
      <div className="grid-containers">
        <div className="grid-table">
          <div className="cell cell-1">
            {vechicleDetails.ratio}
            <img
              src="/images/3.png" // Adjust the path if necessary
              alt="Vehicle dimension"
              onClick={handleImageClick}
              className="clickable-image"
            />
            <span>Click to Enlarge</span>
          </div>
          <div className="cell cell-2">Letters & Numerals</div>
          <div className="cell cell-3">Height (H)</div>
          <div className="cell cell-4">{vechicleDetails.height}</div>
          <div className="cell cell-5">Thickness (T)</div>
          <div className="cell cell-6">{vechicleDetails.Thickness}</div>
          <div className="cell cell-7">Space Between (S)</div>
          <div className="cell cell-8">{vechicleDetails.space_between}</div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>✕</button>
            <img src="/images/3.png" alt="Enlarged view" className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCommon;
