import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logo } from "../../helper/icon-path";
import "./navbar.scss";

const Navbar = ({isFullWidth,setisFullWidth}) => {
  const navigate = useNavigate();
 

  return (
    <>
      <nav
        className={isFullWidth ? "navFullWidth" : ""}
        onMouseOver={() => setisFullWidth(true)}
        onMouseLeave={() => setisFullWidth(false)}
      >
        <ul>
          <li>
            <span class="logo logo__wrapper">
              <img class="logo-img" src={logo} alt="logo" />
              <span class="nav-item">SN Online Center</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-home"></i>
              <span class="nav-item" onClick={() => navigate("home")}>
                {" "}
                Home
                {/* <Link to="home">Home</Link> */}
              </span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-server"></i>
              <span class="nav-item">
                <Link to="services">services</Link>
              </span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-file"></i>
              <span class="nav-item">1.Tehsil Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-id-card"></i>
              <span class="nav-item">2.License Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-university"></i>
              <span class="nav-item">3.GST & Tax Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-clipboard"></i>
              <span class="nav-item">4.Registration Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-filter"></i>
              <span class="nav-item">5.Graphic Design Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-building"></i>
              <span class="nav-item">6.Banking Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-tree"></i>
              <span class="nav-item">7.Agriculture Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-book"></i>
              <span class="nav-item">8.Education Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <i class="fas fa-user"></i>
              <span class="nav-item">9.Web Services</span>
            </span>
          </li>
          <li>
            <span class="class logo__wrapper">
              <span class="nav-item">10.Real Estate Services</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
