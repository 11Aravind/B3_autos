import { useState } from "react"
import "./BookHSRP.css"
const BookHSRP = () => {

    const tov = [
        {
            item: "2 Wheeler", options: [
                {
                    item: "Petrol/Diesel", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back", options: [] }
                    ]
                },
                {
                    item: "EV", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back", options: [] }
                    ]
                }
            ]
        },
        {
            item: "3 Wheeler", options: [
                {
                    item: "Petrol / Diesel / CNG - Private", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Sticker", options: [] },
                        { item: "Sticker", options: [] }
                    ]
                },
                {
                    item: "Petrol/Diesel/CNG-Taxi", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Sticker", options: [] },
                        { item: "Sticker", options: [] }
                    ]
                },
                {
                    item: "EV-Private", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Sticker", options: [] },
                        { item: "Sticker", options: [] }
                    ]
                },
                {
                    item: "EV-Taxi", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Sticker", options: [] },
                        { item: "Sticker", options: [] }
                    ]
                }
            ]
        },
        {
            item: "4 Wheeler", options: [
                {
                    item: "Petrol/Diesel/CNG-Private", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },
                {
                    item: "Petrol/Diesel/CNG-Taxi", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },
                {
                    item: "EV-Private", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },
                {
                    item: "EV-Taxi", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },

            ]
        },
        {
            item: "Others", options: [
                {
                    item: "Bus", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },
                {
                    item: "Van", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },
                {
                    item: "Trucks & Lorries", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },
                {
                    item: "Small & Medium Goods Carrier", options: [
                        { item: "Front", options: [] },
                        { item: "Back", options: [] },
                        { item: "Front & Back with Colour Sticker", options: [] },
                        { item: "Colour Sticker", options: [] }
                    ]
                },

            ]
        }
    ]
    const [selectedItem, handleSelect] = useState(tov);
    const [selectedVehicle, handleSelectedOptions] = useState("");
    return (
        <section className='bookHSRPContainer'>
            <form>
                <h1>Place order for new HSRP</h1>
                <div className="row">
                    <label htmlFor="state"> State</label>
                    <select name="state" id="state">
                        <option >Kerala</option>
                        <option >Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option >Bihar</option>
                        <option >Goa</option>
                        <option >Chhattisgarh</option>
                        <option >Gujarat</option>
                        <option >Haryana</option>
                        <option >  Himachal Pradesh</option>
                        <option >Jharkhand</option>
                        <option >Karnataka</option>
                        <option >Kerala</option>
                        <option >Maharashtra</option>
                        <option >Madhya Pradesh</option>
                        <option >Manipur</option>
                        <option > Punjab</option>
                        <option >Odisha</option>
                        <option >Nagaland</option>
                        <option >Mizoram</option>
                        <option >Meghalaya</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">  Tamil Nadu</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option >Delhi [National Capital Territory (NCT)]</option>

                    </select>
                </div>
                <div className="row">
                    <label htmlFor="typeofvehicle">Choose your Vehicle</label>
                    <div className="typeofvehicle">{selectedVehicle != "" && `${selectedVehicle}`} {selectedVehicle != "" && <div className="clear" onClick={() => { handleSelect(tov); handleSelectedOptions("") }}>Clear</div>} <div className="vehicleTypes">
                        {console.log(selectedItem)}
                        <div className="variant"> {selectedVehicle != "" && selectedItem.length > 0 && "Please select variant"}</div>
                        {selectedItem[0].options.length > 0 ?
                            selectedItem.map((item, index) => {
                                // return <span><input type="radio" name={selectedItem[0].item} checked={false} id={item.item} onClick={() => {
                                //     // selectedVehicle = selectedVehicle + item.item;
                                //     handleSelectedOptions(selectedVehicle != "" ? selectedVehicle + " > " + item.item : item.item)
                                //     handleSelect(selectedItem[index].options);
                                //     // selectedItem[index].options.length > 0 && handleSelect(selectedItem[index].options);

                                // }} /><label for={item.item}>{item.item}</label> </span>
                                return <div className="vehicleType" onClick={() => {
                                    handleSelectedOptions(selectedVehicle != "" ? selectedVehicle + " > " + item.item : item.item)
                                    handleSelect(selectedItem[index].options);
                                    // selectedItem[index].options.length > 0 && handleSelect(selectedItem[index].options);
                                    // selectedItem[index].options.length
                                }}>{item.item}</div>
                            }) : <div className="radioVehicleTypes">{
                                selectedItem.map((item, index) => {
                                    return <div>    <input type="checkbox" name={item.item} id={item.item} /><label for={item.item}>{item.item}</label></div>
                                })
                            }
                            </div>}
                    </div>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="registrationNumber">First Name </label>
                    <input type="text" name="registrationNumber" id="registrationNumber" />
                </div>
                <div className="row">
                    <label htmlFor="registrationNumber">Middle Name </label>
                    <input type="text" name="registrationNumber" id="registrationNumber" />
                </div>
                <div className="row">
                    <label htmlFor="registrationNumber">Last Name</label>
                    <input type="text" name="registrationNumber" id="registrationNumber" />
                </div>
                <div className="row">
                    <label htmlFor="registrationNumber">Mobile Number</label>
                    <input type="text" name="registrationNumber" id="registrationNumber" />
                </div>

                <div className="row">
                    <label htmlFor="registrationNumber">  Registration number</label>
                    <input type="text" name="registrationNumber" placeholder="Eg:KA-03-HA-1985" id="registrationNumber" />
                </div>
                <div className="row">
                    <label htmlFor="engineNumber">Engine/Motor number</label>
                    <input type="text" name="engineNumber" placeholder="Eg: PJ12345U123456P" id="engineNumber" />
                </div>
                <div className="row">
                    <label htmlFor="ChassisNumber">Chassis/Frame/VIN number</label>
                    <input type="text" name="ChassisNumber" placeholder="Eg: 1HGCM82633A123456" id="ChassisNumber" />
                </div>

                <div className="row">
                    <label htmlFor="ChassisNumber"></label>
                    {/* <div className="vehicleTypes">
                        {console.log(selectedItem)}
                        {

                            selectedItem.map((item, index) => {
                                return <div className="vehicleType" onClick={() => {
                                    // selectedVehicle = selectedVehicle + item.item;
                                    handleSelectedOptions(selectedVehicle + " " + item.item)
                                    handleSelect(selectedItem[index].options);
                                    // selectedItem[index].options.length > 0 && handleSelect(selectedItem[index].options);

                                }}>{item.item}</div>
                            })}
                    </div> */}

                    {/* <select name="tov" id="">
                        <option ></option>
                        <option ></option>
                        <option ></option>
                        <option ></option>
                    </select> */}
                </div>
                {/* <div className="row">
                    <div className="a">             {selectedVehicle != "" && `you have slected ${selectedVehicle}`}</div>
                </div> */}
                <div className="row">
                    <div className={`getDataBtn ${selectedItem.length == 0 && 'enable'}`}>Place Order</div>
                </div>




            </form>
        </section >
    )
}

export default BookHSRP