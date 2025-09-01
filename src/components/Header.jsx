import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import hero from "../images/pic-3.png";

export default function Header() {
  const navigate = useNavigate(); 

  return (
    <div className="main">
      <header className="header">
        <div className="container">
          <h1>Foodie</h1>
          <nav className="navbar">
            <ul className="navbar-list">
              <a className="navbar-item" href="#container-2">
                Home
              </a>
              <a className="navbar-item" href="#container-3">
                Aboutus
              </a>
              <a className="navbar-item" href="#food-flex">
                Shop
              </a>
              <a className="navbar-item" href="#last-section">
                Blog
              </a>
              <a className="navbar-item" href="#footer">
                Contactus
              </a>
            </ul>
          </nav>
          <div className="last-header">
            <button
              className="animated-button-2"
              onClick={() => navigate("/login")} 
            >
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Login</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div id="container-2">
        <div className="hero-ctent">
          <p className="hero-tittle">Eat Sleep And</p>
          <h2>Super Dilicious Burger In Town!</h2>
          <p className="hero-text">
            Food is any substance consumed to provide nutritional support for an
            organism
          </p>
          <button className="animated-button" onClick={() => navigate("/booking")}>
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Book Table</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        <div className="hero-img" data-aos="fade-left">
          <img src={hero} alt="" width={"90%"} height={"90%"} />
        </div>
      </div>
    </div>
  );
}
