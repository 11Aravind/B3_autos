import { useNavigate } from "react-router-dom"
import "./Media.css"
const Media = () => {
    const navigate = useNavigate();
    const medias = [
        {
            heading: "As HSRP deadline looms, owners of old vehicles face hardship",
            url: "https://www.thehindu.com/news/national/karnataka/as-hsrp-deadline-looms-owners-of-old-vehicles-face-hardship/article67829606.ece",
            img: "https://th-i.thgim.com/public/todays-paper/tp-national/tp-karnataka/2o20kx/article67436240.ece/alternates/FREE_1200/HSRPs-have-been%2BG8LBT7IA5.5.jpg.jpg",
            shortDescription: "As the deadline for getting the High-Security Registration Plate (HSRP) approaches, vehicle owners, particularly those with older vehicles from companies that no longer exist, are confused and facing challenges."
        },
        {
            heading: "High-Security Registration Plates to be mandatory for old vehicles in Kerala ",
            url: "https://english.mathrubhumi.com/news/kerala/high-security-registration-plates-to-be-mandatory-for-older-vehicles-in-kerala-1.9132203",
            img: "https://english.mathrubhumi.com/image/contentid/policy:1.5079179:1644606176/image.jpg?$p=0f6e831&f=16x10&w=852&q=0.8",
            shortDescription: "In a significant move, the Kerala Government will soon make High-Security Registration Plates (HSRP) mandatory for old vehicles in the state. Accordi.."
        },
        {
            heading: "The Deadline For Installation Of High Security Registration Plate Extended Till May 31",
            url: "https://timesofindia.indiatimes.com/city/bengaluru/the-deadline-for-installation-of-high-security-registration-plate-extended-till-may-31/amp_articleshow/107782823.cms#amp_tf=From%20%251%24s&aoh=17135267315147&referrer=https%3A%2F%2Fwww.google.com",
            img: "https://static.toiimg.com/thumb/msid-107782883,width-400,height-225,resizemode-72/107782883.jpg",
            shortDescription: " The deadline for installation of High Security Registration Plate (HSRP) has been extended till May 31, 2024. On Saturday, the transport and road safety commissioner issued a public notice in this regard. "
        },
        {
            heading: "India Mandates High-Security Number Plates for All Vehicles: Here's How to Get Yours Easily",
            url: "https://www.news18.com/auto/india-mandates-high-security-number-plates-for-all-vehicles-heres-how-to-get-yours-easily-8778253.html",
            img: "https://images.news18.com/ibnlive/uploads/2024/02/new-project-1-2024-02-14t115046.434-2024-02-f81962380c7e630ad6c52085cf5d8024.jpg?impolicy=website&width=640&height=480",
            shortDescription: " The Indian government made a change to vehicle number plates a few years back to solve identification issues. "
        }
    ]
    return (
        <section className="media" >
            <h1>Our     <span>Media</span></h1>
            <div className="mediaContainer">
                {medias.map(media => {
                    return <div className="mediaCard" onClick={() => { window.location.href = media.url }}>
                        {/* <img src={media.img} alt="" srcset="" width="25%" /> */}
                        <div className="img" style={{ backgroundImage: `url(${media.img})` }}></div>
                        <div className="text">
                            <h3>{media.heading}</h3>
                            <p>{media.shortDescription}</p>
                        </div>
                    </div>
                })}

            </div>
            <h1>Youtube     <span>Videos</span></h1>
            <div className="youtubeVideos">
                {/* <div className="youtubeVideocard"><iframe width="560" height="315" src="https://www.youtube.com/embed/GrJ3L4jaDmA?si=gfGcWb4RSZ48UrZW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> */}
                <div className="youtubeVideocard"><iframe width="560" height="315" src="https://www.youtube.com/embed/qFsYXeJ2gxU?si=0i3-MJGvlaTPMDS5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </div>
            {/* https://youtu.be/GrJ3L4jaDmA?si=ufH7kOMX04GnGIHH

            https://youtu.be/qFsYXeJ2gxU?si=1VUNpdSRTiHwAinJ */}

        </section>
    )
}

export default Media