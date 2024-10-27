import { FaAngleDown, FaAngleRight, FaQuestion } from "react-icons/fa"
import ReactHtmlParser from 'react-html-parser';
import "./Home.css"
import "./HomeMobile.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../../Components/Carosal/ImageCarousel";
import Gallery from "../../Components/Gallary/Gallery";
const Home = () => {
    const navigate = useNavigate();
    const faqs = [
        {
            "question": "What is HSRP",
            "answer": "High Security Number Plate (HSRP) is a registration plate that is electronically linked to a vehicle.Made of aluminum – conforming to AIX 159: 2019 or ISO: 7591 – HSRP features a chromium- based hot stamped Ashoka Chakra symbol in a blue hologram(20mm x 20mm) and a unique 10 - digit PIN engraved with laser technology.The PIN is unique to each vehicle and remains different for front and back number plates."
        },
        {
            "question": "How does HSRP help in the security of vehicles?",
            "answer": "<b> Laser Number:</b> High Security Registration Plates have a unique laser identification number that is attached with all the relevant            information about the motor vehicle like registration number,make, model, engine number, chassis no. etc. This laser numberhelps in determining whether the number plate is genuine or not and thus helps in identifying the authenticity of the vehicle in question.<br/><b>  Snap Locks:</b> HSRP is fitted on the vehicles using non-removable and non-reusable snap locks, making it extremely difficult to remove the number plate <br/><b>Reflective Sheet:</b> HSRP also has a white or yellow reflective sheet laminated on its surface making the vehicle more visible during night thus avoiding accidents <br/><b> Standard Format:</b> There are 4 sizes of HSRP. The registration numbers are embossed very clearly on it making them highly readable. This helps the law enforcement agencies to curb down crime in various ways."
        },
        {
            "question": "Are HSRPs mandatory across India?",
            "answer": "Fastening of HSRPs has been made mandatory on the vehicles sold on or after 1 st April 2019 as per the Notification G.S.R. 1162(E) dated 4 th December 2018 and S.O. 6052(E) dated 6 th December 2019 issued by the Ministry of Road Transport and Highways."
        },
        {
            "question": "How can I get my old vehicle fitted with HSRP?",
            "answer": "Fitment of the HSRP on old/ existing vehicle can be done by just contacting your nearest B3 Autos outlet.."
        },
        {
            "question": "What are the documents required for booking of HSRP?",
            "answer": "Only Registration Certificate (RC) of the vehicle is required to apply for an HSRP,<br/> Take care to ensure that the Registration Certificate is linked with the registered mobile number.."
        },

        {
            "question": "Is home installation of HSRP available?",
            "answer": "Yes, the option for home installation of HSRP is available.."
        },
    ];
    return (<>
        {/* <section className="banner">
            <div className="bannerLeft">
                <h1>High Security Registration Plates Get ahead of the curve</h1>
                <div className="HSRPButtons">
                    <div className="knowHSRPBtn" onClick={() => { navigate("/HSRP") }}>KNOW HSRP</div>
                    <div className="bookHSRPBtn" onClick={() => { navigate("/bookHSRP") }}>Book HSRP</div>
                </div>
            </div>
        </section> */}
        <ImageCarousel/>
        <div className="hr" />
        <section className="about">

            <h1>B3 Autos</h1>
            <div className="aboutDescription">
                <p>B3 Autos is a subsidiary of B3 Group – the multi-divisional group
                    hailed as one of the finest engineering companies in the country –
                    dedicated to the cause of enforcing High Security Registration Plates
                    (HSRP) in India. With an unrelenting commitment to excellence and
                    an undivided focus on innovation, we offer cutting-edge solutions to
                    address the evolving needs of vehicle identification and protection.</p>
                <div className="readMore" onClick={() => { navigate("/About") }}>Read More</div>
            </div>
        </section>
        <Gallery/>
        <section className="faq" id="FAQS">
            <div className="faqHeader">

                <h4>Find your answer here</h4>
                <h1>Frequently asked Questions</h1>
                {/* <div className="viewAllQuestionBtn"><FaQuestion /> View all Questions</div> */}
            </div>
            <div className="faqCards">
                {faqs.map((faq) => {
                    return <FaqCard faq={faq} />

                })}
            </div>
        </section>
    </>
    )
}

export default Home;

export const FaqCard = ({ faq }) => {
    const [showAccodins, handleAccodins] = useState(false)
    console.log(faq);
    return (
        <div className="faqCard" onClick={() => handleAccodins(!showAccodins)}>
            <div className="question">{faq.question} {showAccodins ? <FaAngleDown /> : <FaAngleRight />} </div>
            {<div className="answer" style={{ "max-height": showAccodins ? "30dvh" : "0dvh" }}>
                <div className="textAnswer">Answer</div>
                {ReactHtmlParser(faq.answer)}</div>}
        </div>
    )
}
