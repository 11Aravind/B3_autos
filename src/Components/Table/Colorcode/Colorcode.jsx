import "./Colorcode.css";
const Colorcode = () => {
  return (
    <div className="grid-container gridPage">
      <div className="grid-item">
        <h2 className="item-heading">BSES: BHARAT STAGE EMISSION STANDARD</h2>
        <div className="content-list">
          <p>BS III & BS IV</p>
          <p>BS III & BS IV</p>
          <p>BS III & IV</p>
          <p>BS VI</p>
          <p>BS VI</p>
          <p>BS VI</p>
        </div>
      </div>
      <div className="grid-item">
        <h2 className="item-heading" style={{ padding: "20px 0px" }}>
          FUEL TYPE
        </h2>
        <div className="content-list">
          <p className="color-bg color-light-blue">PETROL & CNG</p>
          <p className="color-bg color-orange">DIESEL</p>
          <p className="color-bg color-grey">OTHER VEHICLES</p>
          <p className="color-bg color-light-blue-top-green">
            PETROL & CNG & LPG
          </p>
          <p className="color-bg color-orange-top-green">DIESEL</p>
          <p className="color-bg color-grey-top-green">OTHER VEHICLES</p>
        </div>
      </div>
      <div className="grid-item">
        <h2 className="item-heading" style={{padding: "19px 0px" }}>
          3 RD LP BACKGROUND
        </h2>
        <div className="content-list">
          <p>LIGHT BLUE</p>
          <p>ORANGE</p>
          <p>GREY</p>
          <p>GREEN STRIP ON TOP LIGHT BLUE</p>
          <p>GREEN STRIP ON TOP ORANGE</p>
          <p>GREEN STRIP ON TOP GREY</p>
        </div>
      </div>
    </div>
  );
};
export default Colorcode;
