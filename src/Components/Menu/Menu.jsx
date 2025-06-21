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
        }>
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
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}>
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
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}>
        Contact Us
      </NavHashLink>
    ),
  },
]
export const MENU_ITEMS = {
  products: [
    { path: "/two-wheelers/1", label: "Two Wheelers – Motor Cycle Front" },
    { path: "/two-wheelers/2", label: "Two & Three Wheelers" },
    { path: "/two-wheelers/3", label: "Four Wheelers – LMV" },
    {
      path: "/two-wheelers/4",
      label: "Medium, Heavy Commercial Vehicle & Trailer Combination",
    },
    { path: "/two-wheelers/5", label: "Construction Equipment Vehicles" },
  ],
  services: [
    { path: "/service1", label: "HSRP Fitment Centers & Services" },
    { path: "/service2", label: "HSRP Home Delivery Services" },
  ],
}
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import { useState, useCallback, memo } from "react"
// import { MENU_ITEMS } from './menuData';
import "./Menu.css"
import "./MenuMobile.css"

const Menu = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpened, setMobileMenu] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isSubDropdownOpen, setSubDropdownOpen] = useState("")

  const closeMobileMenu = useCallback(() => {
    setMobileMenu(false)
    setDropdownOpen(false)
    setSubDropdownOpen("")
  }, [])

  const handleSubmenuClick = useCallback(
    (path) => {
      navigate(path)
      closeMobileMenu()
    },
    [navigate, closeMobileMenu]
  )

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev)
    setSubDropdownOpen("")
  }, [])

  const toggleSubDropdown = useCallback((type) => {
    setSubDropdownOpen((prev) => (prev === type ? "" : type))
  }, [])

  const handleLogoClick = useCallback(() => {
    window.scrollTo(0, 0)
    navigate("/")
  }, [navigate])

  return (
    <div>
      <div className="mobileMenuOptions">
        <div className="logo" onClick={handleLogoClick} />
        {isMobileMenuOpened ? (
          <FaTimes onClick={closeMobileMenu} />
        ) : (
          <FaBars onClick={() => setMobileMenu(true)} />
        )}
      </div>

      <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"}>
        <div className="logo" onClick={handleLogoClick} />
        <div className={`links ${isMobileMenuOpened ? "active" : ""}`}>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/About" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/HSRP" onClick={closeMobileMenu}>
            HSRP
          </Link>

          <div className="dropdown" onMouseLeave={() => setDropdownOpen(false)}>
            <Link to="#" onClick={toggleDropdown}>
              PRODUCTS & SERVICES <FaChevronDown className="arrow-icon" />
            </Link>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <SubMenu
                  title="Product HSRP"
                  items={MENU_ITEMS.products}
                  isOpen={isSubDropdownOpen === "products"}
                  onToggle={() => toggleSubDropdown("products")}
                  onItemClick={handleSubmenuClick}
                />
                <SubMenu
                  title="Services"
                  items={MENU_ITEMS.services}
                  isOpen={isSubDropdownOpen === "services"}
                  onToggle={() => toggleSubDropdown("services")}
                  onItemClick={handleSubmenuClick}
                />
              </div>
            )}
          </div>

          {/* Main menu links */}
          <Link to="/legislation" onClick={closeMobileMenu}>
            Legislation
          </Link>
          <Link to="/quality" onClick={closeMobileMenu}>
            Quality
          </Link>
          <NavHashLink to="/#FAQS" onClick={closeMobileMenu}>
            FAQS
          </NavHashLink>
          <Link to="/Media" onClick={closeMobileMenu}>
            Media
          </Link>
          <NavHashLink to="/#ContactUs" onClick={closeMobileMenu}>
            Contact
          </NavHashLink>
        </div>

        <div className="icons socialmedia-icons">
          <FaFacebook size={20} />
          <FaWhatsapp size={20} />
          <FaInstagram size={20} />
        </div>
      </nav>
    </div>
  )
}

export default memo(Menu)

const SubMenu = memo(({ title, items, isOpen, onItemClick, onToggle }) => {
  return (
    <div className="dropdown-item" onClick={onToggle}>
      {title} <FaChevronRight className="arrow-icon" />
      {isOpen && (
        <div className="sub-dropdown">
          {items.map(({ path, label }) => (
            <Link key={path} to={path} onClick={() => onItemClick(path)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
})
