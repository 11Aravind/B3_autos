import { FaAngleDown, FaAngleRight, FaQuestion } from "react-icons/fa"
import ReactHtmlParser from 'react-html-parser';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../../Components/Carosal/ImageCarousel";
import Gallery from "../../Components/Gallary/Gallery";
import mainLogo from "@/assets/A2_B3_Autos_ main_page.png";
import "./Home.css"
import "./HomeMobile.css"
import { faqs } from "../../utils/constants";
const Home = () => {
    const navigate = useNavigate();
   
    return (<>
        <ImageCarousel/>
        {/* <div className="hr" /> */}
        <section className="about">
        <div className="main-logo">
    <img src={mainLogo} alt="B3 Autos" />
  </div>
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
                    return <FaqCard faq={faq} key={faq?.question}/>

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
