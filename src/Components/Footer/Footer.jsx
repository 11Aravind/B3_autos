import { FaEnvelope, FaFacebook, FaInstagram, FaLink, FaMobile, FaWhatsapp } from "react-icons/fa"
import "./Footer.css"
import "./FooterMobile.css"
import { FaMapLocation } from "react-icons/fa6"
import { links } from "../Menu/Menu"
const Footer = () => {
    return (
        <footer id="ContactUs">
            <div className="line"></div>
            <div className="footerContainer">
                <div className="col1">
                    <div className="logo"></div>
                    <div className="description">B3 Autos,
                        29/330, Plot No. 39, Girinagar Colony,
                        Kadavanthra, Kochi - 682020</div>
                </div>
                <div className="col2">
                    <h3>Contact Us</h3>
                    <div className="mail"><FaEnvelope />{import.meta.env.VITE_EMAIL}</div>
                    <div className="phone"><FaMobile /> {import.meta.env.VITE_PHONE}</div>
                    <div className="whatsapp"><FaWhatsapp />{import.meta.env.VITE_WHATSAPP}</div>
                    {/* <div className="map"><FaMapLocation />{import.meta.env.VITE_MAP}</div> */}
                </div>
                <div className="col3">
                    <h3>Quick Links</h3>
                    <div className="quickLinks">
                        {links.map(({ link }) => {
                            return <div className="link"><FaLink />{link}</div>

                        })}
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="copyRightContainer">
                <div className="copyright">@2024 b3autos</div>
                <div className="socialMediaLinks">
                    <FaWhatsapp />
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer