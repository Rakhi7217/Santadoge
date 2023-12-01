import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="btn-navbar-heading">SantaDoge</div>
      <div className="navbarMenu">
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          Home
        </Link>

        <Link
          to="skillsTitle"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          About
        </Link>

        <Link
          to="works"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          {" "}
          Tocknomics
        </Link>

        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          {" "}
          Charts{" "}
        </Link>
      </div>
      <button className="navbarBtn">
        <FaRegCommentAlt className="navbarBtnImg" /> Join Telegram
      </button>

      <FiAlignRight
        className="mobMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skillsTitle"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          {" "}
          Tocknomics
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          {" "}
          Charts{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
