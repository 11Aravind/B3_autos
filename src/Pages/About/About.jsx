import { FaBullseye } from "react-icons/fa"
import "./About.css"
import { GoGoal } from "react-icons/go"
import { Fa1, Fa2, Fa3, FaPeopleGroup } from "react-icons/fa6"
import { useEffect } from "react"
export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section class='aboutPage'>
                <div className="left">
                    <h1><span>Who</span> We Are</h1>
                    <p>B3 Autos is a subsidiary of B3 Group – the multi-divisional group
                        hailed as one of the finest engineering companies in the country –
                        dedicated to the cause of enforcing High Security Registration Plates
                        (HSRP) in India. With an unrelenting commitment to excellence and
                        an undivided focus on innovation, we offer cutting-edge solutions to
                        address the evolving needs of vehicle identification and protection.</p>
                </div>
                <div className="right"></div>
            </section>
            <section className="missionTeamStrength">
                <div className="mission">
                    <h2><GoGoal /> Our Mission</h2>
                    <p>Our mission is simple yet singular – to safeguard vehicles and
                        enhance road safety through the implementation of advanced security
                        measures. We strive to provide our customers with reliable and
                        tamper-proof registration plates that meet and exceed industry
                        standards.</p>
                </div>
                <div className="team">
                    <h2><FaPeopleGroup />Our Team</h2>
                    <p>At B3 Autos, we are a team of seasoned professionals driven by a
                        passion for security and technology. With years of experience in the
                        automotive industry and a deep understanding of regulatory
                        standards, we identify ourselves as pioneers in the burgeoning field of
                        designing and manufacturing HSRP in the state.</p>
                </div>

            </section>
            <section className="strengthSection">
                <h1><span>Our</span>  Strengths</h1>
                <div className="strengthContainer">
                    <div className="strength">
                        <h3>Cutting-Edge Technology</h3>
                        <p>We employ the latest technological advancements to develop
                            HSRP solutions that are not only highly secure but also user-
                            friendly and convenient.</p>
                    </div>
                    <div className="strength">
                        <h3>Compliance and Quality</h3>
                        <p>Our plates are painstakingly designed and manufactured to
                            comply with all relevant regulations and quality standards,
                            ensuring the approval of vehicle owners and authorities alike.</p>
                    </div>
                    <div className="strength">
                        <h3>Customer Focus</h3>
                        <p> We value customer satisfaction above all else, offering
                            personalised service and support to meet the unique
                            requirements of each client.</p>
                    </div>
                </div>
            </section>
            <section className="ourProcedure">
                <h1><span>Our</span>  Procedure</h1>
                <p>The designing and manufacturing of HSRP solutions happen in three
                    stages:</p>
                <div className="steps">
                    <div className="step">
                        <h2> <span> Step 1</span>  B3 Autos Factory – where the basic plate making process is finished
                            via:</h2>
                        <ul>
                            <li><b>Manufacturing</b> of aluminum plates conforming to AIX 159:2019
                                or ISO:7591 standards</li>
                            <li><b>Lamination</b> with reflective sheeting having IND inbuilt in it
                                according to the type of vehicle ownership or electric</li>
                            <li>
                                <b>Hot stamping</b> of chromium based Hologram of ‘Ashoka Chakra’
                            </li>
                            <li>
                                <b>Cutting</b> and pressing of plates, according to specific sizes
                            </li>
                            <li>
                                <b> Laser marking</b> of the permanent identification number of
                                minimum ten digits
                            </li>
                        </ul>

                    </div>
                    <div className="step">
                        <h2> <span> Step 2</span> Punching Stations</h2>
                        <ul>
                            <li><b>Punching</b> (embossing) of the plate with the unique alpha-
                                numeric registration number of the vehicle</li>
                            <li><b>Hot stamping</b> with black foil</li>
                            <li><b>Printing</b> of the HSRP stickers</li>
                        </ul>

                    </div>
                    <div className="step">
                        <h2> <span> Step 3</span> Fitment Centres</h2>
                        <ul>
                            <li><b>Fixing</b> of the HSRP number plates to the vehicles.</li>
                            <li><b>Fastening</b> with non-removable, non-reusable snap locks/ pop
                                rivets</li>
                        </ul>

                    </div>
                </div>

            </section>
        </>
    )
}
