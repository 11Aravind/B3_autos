import "./Quality.css";
const Quality = () => {
  return (
    <section class="qualityPage">
      <div className="page-main-heading-container">
        <div className="page-main-heading">Quality</div>
      </div>
      <div className="Certification">
        <h1 className="sub-head">Certification & Policies </h1>
        <p>
          <strong>MotorSigns India</strong> certifies that Products and
          accessories are Certified as compliant with the prescribed National
          Standard for HSRP – High Security Registration Plates .
        </p>
        <p>
          <strong>MotorSigns India</strong> complies with rules, regulations and
          protocols of the State and the Central Government with reference to
          manufacture and issue by sale to OEM’s and with fitment of HSRP to
          Motor Vehicle Owners.
        </p>
      </div>
      {/* //MotorSign HSRP Product Warranty */}
      <div className="MotorSign">
        <h1 className="sub-head">MotorSign HSRP Product Warranty</h1>
        <p>
          <strong>
            MotorSigns India WARRANTS that MotorSign HSRP will be free from
            defects and workmanship, legally compliant and Certified Fit-For
            Purpose as per Rule 50 & 51 of CMVR-1989 as amended.
          </strong>
        </p>
        <p>
          <strong>
            Defects Not covered by warranty such as but not limited to Physical
            Damage, Improper handling and maintenance, storage Negligence etc.
          </strong>
        </p>
        <p>
          <strong>5 Year Warranty for Reflective Material</strong>
        </p>
      </div>
      {/* Terms & Conditions */}
      <div className="teams_and_condition">
        <h1 className="sub-head">Terms & Conditions</h1>
        <p>
          MotorSign HSRP is pleased to provide 5 year warranty on terms and
          conditions set out herein.
        </p>
        <p>
          MotorSign HSRP Warrants that Reflective material on HSRP used in
          accordance with the MotorSign Published Guidelines and that of the
          Reflective sheeting manufacturer and their specifications will conform
          to the applicable ISO 7591 -1982 (E) standard for license Plates for a
          period of 5 years from the date of its fitment on to the Motor Vehicle
          that should take place within 15 days from the date of its manufacture
          on the Terms and conditions set forth herein.
        </p>
        <p>
          Subject to compliance with the claim process, if the product does not
          meet the National Standard in terms of the TAC- Type Approval
          Certificate, MotorSign HSRP in consultation with the Reflective
          Manufacturer/supplier will replace or refurbish the product Free of
          Cost. Or at Pro-rated costs determined at the discretion of MotorSign
          HSRP/Reflective Sheeting Manufacturer whose decision shall be final.
        </p>
      </div>
      {/* The 5 Year Warranty Claim Process */}
      <div className="warranty_claim">
        <h1 className="sub-head">The 5 Year Warranty Claim Process</h1>
        <ul>
          <li>
            MotorSign HSRP must be notified in writing of a defect in the
            Product within 7 days of Delivery/Fitment if the defect is apparent
            on normal visual inspection or in the case of a latent defect,
            within 7 days of discovery;
          </li>
          <li>
            Within 7 days of notifying MotorSign HSRP of the potential warranty
            claim, either return the original Product to or provide adequate
            photographs of the alleged defect;
          </li>
          <li>
            MotorSign HSRP will inspect the Product/photographs and determine if
            the defect results in the Product failing to conform to the Indian
            National Standard and the TAC
          </li>
          <li>
            Within 7 days of MotorSign HSRP inspection, it will provide a full
            explanation for accepting or declining the claim and either
            refurbish or replace the Product or return the original Product if
            MotorSigns have it .
          </li>
        </ul>
      </div>
      {/* This warranty does not apply in the following circumstances */}
      <div className="warranty_not_apply">
        <h1 className="sub-head">
          This warranty does not apply in the following circumstances
        </h1>
        <ul>
          <li>
            The defect arises because the customer failed to follow , MotorSign
            HSRP oral or written instructions for the storage, commissioning,
            handling, installation, use and maintenance of the Product or (if
            there are none) good practice regarding the same;
          </li>
          <li>
            The customer alters or repairs the Product without the written
            consent of , MotorSign HSRP
          </li>
          <li>
            The defect arises as a result of fair wear and tear, wilful damage,
            negligence, or abnormal storage or working conditions;
          </li>
          <li>
            If you incorrectly order the Product, proven by a copy of a fax,
            email or postal order, or if ordered by telephone, by checking the
            telephone call.
          </li>
          <li>Any accidental damage caused by third parties.</li>
          <li>
            You are reminded that all incoming and out-going calls are recorded
            for quality and training purposes;
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Quality;
