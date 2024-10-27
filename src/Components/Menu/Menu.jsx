// import { Link } from "react-router-dom"
// import "./Menu.css"
// import "./MenuMobile.css"
// import { FaBars, FaFacebook, FaLock, FaRegWindowClose, FaSearch, FaTimes, FaWhatsapp, FaWindowClose } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"
// import { NavHashLink } from 'react-router-hash-link';
// import { useState } from "react";
export const links = [
  {
    link: <Link to="/">Home</Link>,
  },
  {
    link: <Link to="/About">About</Link>,
  },
  {
    link: <Link to="/HSRP">HSRP</Link>,
  },
  {
    link: <Link to="/HSRP">PRODUCTS & SERVICES</Link>,
  },
  {
    link: (
      <NavHashLink
        to="/#FAQS"
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        FAQS
      </NavHashLink>
    ),
  },
  {
    link: <Link to="/Media">Media</Link>,
  },
  {
    link: (
      <NavHashLink
        to="/#Gallery"
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
      >
        Gallery
      </NavHashLink>
    ),
  },
  {
    link: <Link to="/bookHSRP">Book HSRP</Link>,
  },
  {
    link: (
      <NavHashLink
        to="/#ContactUs"
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
      >
        Contact Us
      </NavHashLink>
    ),
  },
];
// const Menu = () => {
//     const navigate = useNavigate();
//     const [isMobileMenuOpened, setMobileMenu] = useState(false);
//     return (
//         <>
//             <div className="mobileMenuOptions">
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>    {isMobileMenuOpened ? <FaTimes onClick={() => setMobileMenu(false)} /> : <FaBars onClick={() => setMobileMenu(true)} />}
//             </div>
//             <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"} >
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
//                 <div className="links">{links.map(({ link }) => link)}</div>

//                 <div className="icons">
//                     <FaFacebook /><FaWhatsapp />
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Menu

// import { Link } from "react-router-dom";
// import { FaBars, FaFacebook, FaTimes, FaWhatsapp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { NavHashLink } from 'react-router-hash-link';
// import { useState } from "react";
// import "./Menu.css";
// import "./MenuMobile.css";

// const Menu = () => {
//     const navigate = useNavigate();
//     const [isMobileMenuOpened, setMobileMenu] = useState(false);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const [isSubDropdownOpen, setSubDropdownOpen] = useState("");

//     return (
//         <>
//             <div className="mobileMenuOptions">
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
//                 {isMobileMenuOpened ?
//                     <FaTimes onClick={() => setMobileMenu(false)} /> :
//                     <FaBars onClick={() => setMobileMenu(true)} />
//                 }
//             </div>
//             <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"} >
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
//                 <div className="links">
//                     <Link to="/">Home</Link>
//                     <Link to="/About">About</Link>
//                     <Link to="/HSRP">HSRP</Link>

//                     {/* Dropdown for Products & Services */}
//                     <div
//                         className="dropdown"
//                         onMouseEnter={() => setDropdownOpen(true)}
//                         onMouseLeave={() => {
//                             setDropdownOpen(false);
//                             setSubDropdownOpen("");
//                         }}
//                     >
//                         <Link to="/HSRP">PRODUCTS & SERVICES</Link>
//                         {isDropdownOpen && (
//                             <div className="dropdown-menu">
//                                 <div
//                                     className="dropdown-item"
//                                     onMouseEnter={() => setSubDropdownOpen("products")}
//                                     onMouseLeave={() => setSubDropdownOpen("")}
//                                 >
//                                     Product HSRP
//                                     {isSubDropdownOpen === "products" && (
//                                         <div className="sub-dropdown">
//                                             <Link to="/product1">Two Wheelers – Motor Cycle Front</Link>
//                                             <Link to="/product2">Two & Three Wheelers</Link>
//                                             <Link to="/product2">Four Wheelers – LMV</Link>
//                                             <Link to="/product2">MEDIUM, HEAVY  COMMERCIAL VEHICLE & TRAILOR COMBINATION</Link>
//                                             <Link to="/product2">construction equipment vehicles</Link>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div
//                                     className="dropdown-item"
//                                     onMouseEnter={() => setSubDropdownOpen("services")}
//                                     onMouseLeave={() => setSubDropdownOpen("")}
//                                 >
//                                     Services
//                                     {isSubDropdownOpen === "services" && (
//                                         <div className="sub-dropdown">
//                                             <Link to="/service1">HSRP Fitment Centers & Services</Link>
//                                             <Link to="/service2">HSRP Home Delivery Services</Link>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <NavHashLink to="/#FAQS" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>FAQS</NavHashLink>
//                     <Link to="/Media">Media</Link>
//                     {/* <NavHashLink to="/#Gallery" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Gallery</NavHashLink> */}
//                     {/* <Link to="/bookHSRP">Book HSRP</Link> */}
//                     <NavHashLink to="/#ContactUs" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact Us</NavHashLink>
//                 </div>

//                 <div className="icons">
//                     <FaFacebook />
//                     <FaWhatsapp />
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Menu;



// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaFacebook,
//   FaTimes,
//   FaWhatsapp,
//   FaChevronDown,
//   FaChevronRight,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";
// import { useState } from "react";
// import "./Menu.css";
// import "./MenuMobile.css";

// const Menu = () => {
//   const navigate = useNavigate();
//   const [isMobileMenuOpened, setMobileMenu] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isSubDropdownOpen, setSubDropdownOpen] = useState("");

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//     setSubDropdownOpen(""); // Close sub-dropdown when main dropdown toggles
//   };

//   const toggleSubDropdown = (type) => {
//     setSubDropdownOpen((prev) => (prev === type ? "" : type));
//   };

//   const closeMobileMenu = () => {
//     setMobileMenu(false);
//   };

//   return (
//     <div>
//       <div className="mobileMenuOptions">
//         <div
//           className="logo"
//           onClick={() => {
//             window.scrollTo(0, 0);
//             navigate("/");
//           }}
//         >
//           {/* <img src={logo} alt="Logo" /> */}
//         </div>
//         {isMobileMenuOpened ? (
//           <FaTimes onClick={() => setMobileMenu(false)} />
//         ) : (
//           <FaBars onClick={() => setMobileMenu(true)} />
//         )}
//       </div>

//       <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"}>
//         <div
//           className="logo"
//           onClick={() => {
//             window.scrollTo(0, 0);
//             navigate("/");
//           }}
//         >
//           {/* <img src={logo} alt="Logo" /> */}
//         </div>
//         <div className={`links ${isMobileMenuOpened ? "active" : ""}`}>
//           <Link to="/" onClick={closeMobileMenu}>
//             Home
//           </Link>
//           <Link to="/About">About</Link>
//           <Link to="/HSRP">HSRP</Link>
//           <div className="dropdown" onMouseLeave={() => setDropdownOpen(false)}>
//             <Link to="#" onClick={toggleDropdown}>
//               PRODUCTS & SERVICES <FaChevronDown className="arrow-icon" />
//             </Link>
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <div
//                   className="dropdown-item"
//                   onClick={() => toggleSubDropdown("products")}
//                 >
//                   Product HSRP <FaChevronRight className="arrow-icon" />
//                   {isSubDropdownOpen === "products" && (
//                     <div className="sub-dropdown">
//                       <Link to="/two-wheelers/1" onClick={closeMobileMenu}>
//                         Two Wheelers – Motor Cycle Front
//                       </Link>
//                       <Link to="/two-wheelers/2" onClick={closeMobileMenu}>
//                         Two & Three Wheelers
//                       </Link>
//                       <Link to="/two-wheelers/3" onClick={closeMobileMenu}>
//                         Four Wheelers – LMV
//                       </Link>
//                       <Link to="/two-wheelers/4" onClick={closeMobileMenu}>
//                         Medium, Heavy Commercial Vehicle & Trailer Combination
//                       </Link>
//                       <Link to="/two-wheelers/5" onClick={closeMobileMenu}>
//                         Construction Equipment Vehicles
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   className="dropdown-item"
//                   onClick={() => toggleSubDropdown("services")}
//                 >
//                   Services <FaChevronRight className="arrow-icon" />
//                   {isSubDropdownOpen === "services" && (
//                     <div className="sub-dropdown">
//                       <Link to="/service1" onClick={closeMobileMenu}>
//                         HSRP Fitment Centers & Services
//                       </Link>
//                       <Link to="/service1" onClick={closeMobileMenu}>
//                         HSRP Home Delivery Services
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Other Links continue */}
//           <Link to="/legislation" onClick={closeMobileMenu}>
//             Legislation
//           </Link>
//           <Link to="/quality" onClick={closeMobileMenu}>
//             Quality
//           </Link>
//           <NavHashLink
//             to="/#FAQS"
//             scroll={(el) =>
//               el.scrollIntoView({ behavior: "smooth", block: "start" })
//             }
//             onClick={closeMobileMenu}
//           >
//             FAQS
//           </NavHashLink>
//           <Link to="/Media" onClick={closeMobileMenu}>
//             Media
//           </Link>
//           <NavHashLink
//             to="/#ContactUs"
//             scroll={(el) =>
//               el.scrollIntoView({ behavior: "auto", block: "end" })
//             }
//             onClick={closeMobileMenu}
//           >
//             Contact
//           </NavHashLink>
//         </div>
//         <div className="icons socialmedia-icons">
//           <FaFacebook />
//           <FaWhatsapp />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Menu;
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaTimes,
  FaWhatsapp,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import "./Menu.css";
import "./MenuMobile.css";

const Menu = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpened, setMobileMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setSubDropdownOpen] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setSubDropdownOpen(""); // Close sub-dropdown when main dropdown toggles
  };

  const toggleSubDropdown = (type) => {
    setSubDropdownOpen((prev) => (prev === type ? "" : type));
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setDropdownOpen(false); // Close the main dropdown
    setSubDropdownOpen(""); // Close any open sub-dropdowns
  };

  const handleSubmenuClick = (link) => {
    navigate(link); // Navigate to the selected link
    closeMobileMenu(); // Close the mobile menu and dropdowns
  };

  return (
    <div>
      <div className="mobileMenuOptions">
        <div
          className="logo"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        />
        {isMobileMenuOpened ? (
          <FaTimes onClick={() => setMobileMenu(false)} />
        ) : (
          <FaBars onClick={() => setMobileMenu(true)} />
        )}
      </div>

      <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"}>
        <div
          className="logo"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        />
        <div className={`links ${isMobileMenuOpened ? "active" : ""}`}>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/About">About</Link>
          <Link to="/HSRP">HSRP</Link>
          <div className="dropdown" onMouseLeave={() => setDropdownOpen(false)}>
            <Link to="#" onClick={toggleDropdown}>
              PRODUCTS & SERVICES <FaChevronDown className="arrow-icon" />
            </Link>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div
                  className="dropdown-item"
                  onClick={() => toggleSubDropdown("products")}
                >
                  Product HSRP <FaChevronRight className="arrow-icon" />
                  {isSubDropdownOpen === "products" && (
                    <div className="sub-dropdown">
                      <Link to="/two-wheelers/1" onClick={() => handleSubmenuClick("/two-wheelers/1")}>
                        Two Wheelers – Motor Cycle Front
                      </Link>
                      <Link to="/two-wheelers/2" onClick={() => handleSubmenuClick("/two-wheelers/2")}>
                        Two & Three Wheelers
                      </Link>
                      <Link to="/two-wheelers/3" onClick={() => handleSubmenuClick("/two-wheelers/3")}>
                        Four Wheelers – LMV
                      </Link>
                      <Link to="/two-wheelers/4" onClick={() => handleSubmenuClick("/two-wheelers/4")}>
                        Medium, Heavy Commercial Vehicle & Trailer Combination
                      </Link>
                      <Link to="/two-wheelers/5" onClick={() => handleSubmenuClick("/two-wheelers/5")}>
                        Construction Equipment Vehicles
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => toggleSubDropdown("services")}
                >
                  Services <FaChevronRight className="arrow-icon" />
                  {isSubDropdownOpen === "services" && (
                    <div className="sub-dropdown">
                      <Link to="/service1" onClick={() => handleSubmenuClick("/service1")}>
                        HSRP Fitment Centers & Services
                      </Link>
                      <Link to="/service2" onClick={() => handleSubmenuClick("/service2")}>
                        HSRP Home Delivery Services
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/legislation" onClick={closeMobileMenu}>
            Legislation
          </Link>
          <Link to="/quality" onClick={closeMobileMenu}>
            Quality
          </Link>
          <NavHashLink
            to="/#FAQS"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            onClick={closeMobileMenu}
          >
            FAQS
          </NavHashLink>
          <Link to="/Media" onClick={closeMobileMenu}>
            Media
          </Link>
          <NavHashLink
            to="/#ContactUs"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "auto", block: "end" })
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavHashLink>
        </div>
        <div className="icons socialmedia-icons">
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </nav>
    </div>
  );
};

export default Menu;

