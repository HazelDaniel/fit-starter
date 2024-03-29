import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 828 ? true : false;
  const [menuOpended, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <div className="hamburger close">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="header-menu">
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="home"
            span={true}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="programs"
            span={true}
            smooth={true}
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="reasons"
            span={true}
            smooth={true}
          >
            Why us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="plans"
            span={true}
            smooth={true}
          >
            Plans
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="testimonials"
            span={true}
            smooth={true}
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
