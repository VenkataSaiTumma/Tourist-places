import React, { useState, useRef } from "react";
import { FaBars, FaLessThan } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  const HomePage = () => {
    const element = document.getElementById("section-1");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const AboutPage = () => {
    const element = document.getElementById("section-2");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ServicePage = () => {
    const element = document.getElementById("section-3");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const PackagePage = () => {
    const element = document.getElementById("section-4");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ContactPage = () => {
    const element = document.getElementById("section-5");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <div className="Head-container">
        {/* For Desktop Start */}
        <div>
          <div className="Header">
            <Link to="/">
              <h1>
                <MdLocationPin />
                Tourist
              </h1>
            </Link>
          </div>
        </div>
        <div className="Main">
          <a href="#/" className="Nav-item" onClick={HomePage}>
            Home
          </a>
          <a href="#/" className="Nav-item" onClick={AboutPage}>
            About
          </a>
          <a href="#/" className="Nav-item" onClick={ServicePage}>
            Services
          </a>
          <a href="#/" className="Nav-item" onClick={PackagePage}>
            Packages
          </a>
          <div className="dropdown">
            <button className="dropbtn Nav-item">
              Pages
              <FaLessThan className="down-icon" />
            </button>
            <div className="dropdown-content">
              <Link to="/destination" className="Nav-item">
                Destination
              </Link>
              <Link to="/bookings" className="Nav-item">
                Booking
              </Link>
              <Link to="/guides" className="Nav-item">
                Travel Guides
              </Link>
            </div>
          </div>
          <a href="#/" className="Nav-item" onClick={ContactPage}>
            Contact
          </a>
        </div>
        {/* For Desktop End */}

        {/* For Small screen */}
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            <div>
              <a href="#/" onClick={HomePage}>
                Home
              </a>
              <a href="#/" onClick={AboutPage}>
                About
              </a>
              <a href="#/" onClick={ServicePage}>
                Services
              </a>
              <a href="#/" onClick={PackagePage}>
                Packages
              </a>
              <a href="#/" onClick={ContactPage}>
                Contact
              </a>
              <div className="dropdown">
                <button className="dropbtn Nav-item">
                  Pages
                  <FaLessThan className="down-icon" />
                </button>
                <div className="dropdown-content">
                  <Link to="/destination" className="Nav-item">
                    Destination
                  </Link>
                  <Link to="/bookings">Booking</Link>
                  <Link to="/guides">Travel Guides</Link>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Head-container {
    width: 100%;
    height: 100px;
    background-color: #f9f9f9;
    box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
    position: fixed;
    top: 0;
    z-index: 1;
  }

  .Header {
    display: flex;
  }

  h1 {
    color: var(--tp-green);
    font-size: 2.2rem;
  }

  .Main {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: -48px 71px 0px 0px;
    gap: 70px;
  }

  .Nav-item {
    letter-spacing: 0.1rem;
    padding: 14px 16px;
    border: none;
    font-size: 20px;
    color: black;
  }

  .Nav-item:hover {
    background-color: var(--tp-green);
    color: white;
    border-radius: 5px;
    transform: scale(1.1);
  }

  a {
    font-size: 20px;
    text-decoration: none;
  }

  .nav-toggle {
    display: none;
  }

  .links {
    display: none;
  }

  .down-icon {
    font-size: 15px;
    transform: rotate(270deg);
  }

  .dropdown {
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 20px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .dropbtn:hover {
    color: black;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media (max-width: 991px) {
    .Head-container {
      height: auto;
    }

    .nav-header {
      display: flex;
      align-items: center;
      justify-content: end;
      margin: -39px 51px 0px 0px;
    }

    .nav-toggle {
      font-size: 1.5rem;
      background: transparent;
      border-color: transparent;
      transition: all 0.3s linear;
      cursor: pointer;
    }
    .nav-toggle:hover {
      color: #d65106;
      transform: rotate(90deg);
    }

    .links a {
      color: black;
      text-transform: capitalize;
      font-weight: 600;
      letter-spacing: 0.1rem;
      display: block;
      padding: 0.5rem 0.5rem;
      margin: -9px 0px 0px 0px;
    }
    a:hover {
      /* background: #d65106; */
      color: var(--tp-green);
      width: 90%;
      border-radius: 10px;
    }

    .links-container {
      height: 281px;
      overflow: hidden;
      transition: all 0.3s linear;
    }

    .links {
      display: block;
      margin: 4px 0px 0px -20px;
    }

    .Main {
      display: none;
    }

    .nav-toggle {
      display: block;
    }

    ul {
      list-style-type: none;
      line-height: 30px;
    }
  }
`;

export default Header;
