import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../Assets/Images/giolosts_logo.png";

import { FiMenu } from "react-icons/fi";

import "../../Assets/Styles/Menu/style.css";

const NavBar = () => {
  const currentUrl = window.location.pathname;
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <IconContext.Provider value={{ color: "fff" }}>
      <div className={currentUrl == "/about-us" ? "about-us" : ""}>
        <div className={scroll ? `nav` : "nav not-scrolled"}>
          <div className="mobile-menu">
            <FiMenu size={27} />
          </div>

          <div className="nav-container">
            <a href="#" className="nav-logo text" onClick={closeMobileMenu}>
              <img src={logo} alt={logo} className="giolosts_logo logo" />
              <span className="giolost_text">GIOLOSTS TECHNOLOGIES</span>
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaBars /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="/home"
                  className="nav-links text"
                  onClick={closeMobileMenu}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/engineers"
                  className="nav-links text"
                  onClick={closeMobileMenu}
                >
                  FOR ENGINEERS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/companies"
                  className="nav-links text"
                  onClick={closeMobileMenu}
                >
                  FOR COMPANIES
                </a>
              </li>
              <li className="nav-item  contact-us-btn">
                <a
                  href="/"
                  className="nav-links text"
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
