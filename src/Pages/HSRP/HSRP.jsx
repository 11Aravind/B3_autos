import "./HSRP.css"
import hsrpImg from "../../assets/aboutBanner.webp"
const HSRP = () => {
    return (
        <section className="hsrpMain">
            <h1>HSRP: At a glance</h1>
            <p>A High Security Number Plate (HSRP) is a registration plate that is
                electronically linked to a vehicle. Made of aluminum – conforming to
                AIX 159:2019 or ISO:7591 – HSRP features a chromium-based hot-
                stamped Ashoka Chakra symbol in a blue hologram (20mm x 20mm)
                and a unique 10-digit PIN engraved with laser technology. The PIN is
                unique to each vehicle and remains different for front and back
                number plates. It also comes with third number plate (sticker) stuck
                behind the wind shield.</p>
            <img src={hsrpImg} alt="" width="100%" />
            <p>Hot-stamped alphabets and numerals indicate state code, district
                code, and a car registration number, with a film containing the word
                &quot;INDIA&quot; at an angle of 45 degrees. The international registration
                identification code of India &quot;IND&quot; is displayed below the Ashoka
                Chakra hologram.</p>
            <h2>Why HSRP?</h2>
            <ul>
                <li> <b>Enhanced Security </b> by being difficult to
                    remove and tamper with as they come with non-removable and
                    non-reusable snap locks</li>
                <li><b>Authorized Installation</b> ensures they
                    can only be purchased from approved state-authorised dealers
                    or vendors</li>
                <li><b>Better Vehicle Data Collection and Tracking Capabilities </b>
                    for authorities with the unique

                    identification number. It helps to create a central database of
                    details like chassis number, engine number, etc.</li>
                <li><b>Low Possibility of Theft</b></li>
                <li><b>Easy Visibility and Identification</b>
                    made possible by the standardisation of the design and typeface
                    of numerical and alphabetical characters on vehicle number
                    plates across the nation</li>
            </ul>
            <p>All motor vehicle owners are mandated to install HSRPs by July 2022
                as per Ministry of Road Transport and Highways guidelines. While
                vehicles purchased after 2019 come equipped with HSRPs, owners of
                vehicles purchased before 2019 are instructed to replace their number
                plates with HSRPs.</p>
            <h1>HSRP Stickers</h1>
            <p>The colour-coded HSRP stickers indicate the fuel type of the vehicle
                and compliance with emission standards.</p>
            <ul>
                <li>Green sticker for Electric Vehicles</li>
                <li> Blue sticker for Petrol/CNG vehicles</li>
                <li> Orange sticker for Diesel vehicles</li>
                <li>Gray sticker for all others</li>
            </ul>
            <img src={hsrpImg} alt="sticker diagram" width="100%" />
            <p>A green line on the top of the sticker denotes the compliance with BS6
                emission standards. This can be identified with the model of the car or
                the RTO form-12 with the manufacturing date and the VIN number.</p>
            <h1>Getting HSRP: through website or app</h1>
            <ul>
                <li>Visit B3 Autos official website and enter all the required details</li>
                <li>Select HSRP plates or sticker or both, according to the
                    requirement</li>
                <li>Select a preferred fitment centre according to convenient
                    location or home installation option</li>
                <li>Pay the fees for the particular order through the payment
                    gateway on the website/app.</li>
                <li>Once the basic plate making is finished, B3 Autos allocates a
                    punching station for the work</li>
                <li>Once the punching is over, an SMS goes to the customer
                    notifying the completion.</li>

            </ul>
            <h2>Installation of HSRP:</h2>
            <ul>
                <li>Once notified that the number plate is ready, visit the
                    designated fitment centre with the documents    </li>
                <li>If home installation is selected, B3 Autos will coordinate it
                    with the nearby fitment centre</li>
                <li>In both scenarios, produce the proof of the old number
                    plate, RC book and chassis number at the fitment centre to
                    get the final confirmation</li>
            </ul>
            <p><i>Upon cross checking details, B3 Autos will send an OTP to the
                customer that allows the fitment centre to mark the job
                completed</i></p>
            <h1>Getting HSRP: from fitment centre</h1>
            <img src={hsrpImg} alt="&lt;Workflow Diagram&gt;" width="100%" />
            <ul>
                <li>Visit a B3 Autos-approved Fitment Centre</li>
                <li>After logging in with the Fitment Centre login id, the Fitment
                    Centre will scan the details</li>
                <li>Select HSRP plates or sticker or both, according to the
                    requirement</li>
                <li>Select a preferred fitment centre according to convenient
                    location or home installation option</li>
                <li>Pay the fees for the particular order at the fitment centre through
                    the payment gateway</li>
                <li>Once the basic plate making is finished, B3 Autos allocates a
                    punching station for the work</li>
                <li>Once the punching is over, an SMS goes to the customer
                    notifying the completion.</li>

            </ul>
            <h2>     Installation of HSRP:</h2>
            <ul>
                <li>Once notified that the number plate is ready, visit the
                    designated fitment centre with the documents</li>
                <li>If home installation is selected, B3 Autos will coordinate it
                    with the nearby fitment centre</li>
                <li>In both scenarios, produce the proof of the old number
                    plate, RC book and chassis number at the fitment centre to
                    get the final confirmation</li>
            </ul>
            <p> <i>Upon cross-checking the details, B3 Autos will send an OTP to
                the customer that allows the fitment centre to mark the job
                completed</i></p>
        </section>
    )
}

export default HSRP