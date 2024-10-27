import React from "react";
import "./LegalStandardNotice.css";
import { useNavigate } from "react-router-dom";

const LegalStandardNotice = () => {
  const navigate = useNavigate();
  return (
    <div className="bottom-space">
      <div className="For_Your_Information_container">
        <div class="For_Your_Information">
          <div class="text-div">For Your Information</div>
        </div>
        <div class="inner-container">
          <div class="heading">THE LEGAL NOTIFIED STANDARD</div>
          <button
            className="read-more-button"
            onClick={() => {
              navigate("/legislation");
            }}
          >
            READ MORE <span className="arrow">&gt;</span>
          </button>
          {/* <button class="button">READ MORE</button> */}
          <div class="marquee">
            <marquee>
              <span className="alert">ALERT</span> HSRP is a Safety Component
              under Rule 124 of CMVR-1989.
              <span className="red-bubble"></span>Check your HSRP for
              Compliance. Be Safe.
              <span className="red-bubble"></span> Exercise your right for Free
              Replacement if not in Conformance
              <span className="red-bubble"></span> In Public Interest from B3
              Autos WagenTag Safety Matters
              <span className="red-bubble"></span> Safely Home, Always. Keeping
              INDIA Safe, Moving & Visible
            </marquee>
          </div>
        </div>
      </div>
      <div className="danger-msg">
        * All Images are for representation purposes only
      </div>
      <div className="back-btn-container">
        <button className="back-btn" onClick={()=>navigate(-1)}>BACK</button>
      </div>
    </div>
  );
};

export default LegalStandardNotice;
