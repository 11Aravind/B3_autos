import "./Colorcode.css"

const Colorcode = () => {
  return (
    <div class="wrapper">
      <div class="header-box">
        <div class="header-cell center-disply">
          BSES: Bharat Stage Emission Standard
        </div>
        <div class="header-cell center-disply">Fuel Type</div>
        <div class="header-cell center-disply">3 RD LP Background</div>
      </div>

      {/* <!-- Data Box --> */}
      <div class="data-box">
        <div class="data-row">
          <div class="data-cell">BS III & BS IV</div>
          <div class="data-cell light-blue">PETROL & CNG</div>
          <div class="data-cell">LIGHT BLUE</div>
        </div>

        <div class="data-row">
          <div class="data-cell">BS III & BS IV</div>
          <div class="data-cell orange">DIESEL</div>
          <div class="data-cell">ORANGE</div>
        </div>

        <div class="data-row">
          <div class="data-cell">BS III & IV</div>
          <div class="data-cell grey">OTHER VEHICLES</div>
          <div class="data-cell">GREY</div>
        </div>

        <div class="data-row">
          <div class="data-cell">BS VI</div>
          <div class="data-cell green-lightblue">PETROL & CNG & LPG</div>
          <div class="data-cell">GREEN STRIP ABOVE LIGHT BLUE</div>
        </div>

        <div class="data-row">
          <div class="data-cell">BS VI</div>
          <div class="data-cell green-orange">DIESEL</div>
          <div class="data-cell">GREEN STRIP ABOVE ORANGE</div>
        </div>

        <div class="data-row">
          <div class="data-cell">BS VI</div>
          <div class="data-cell green-grey">OTHER VEHICLES</div>
          <div class="data-cell">GREEN STRIP ABOVE GREY</div>
        </div>
      </div>
    </div>
  )
}
export default Colorcode
