import React, { useState } from "react";
import "../assets/css/Header.css";
import logo from "../assets/images/logo.png";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar rounded-b">
        <div className="nav-container">
          <a class="flex title-font font-medium items-center text-gray-900 bg-white md:mb-0 sm:mb-0 sm:p-0">
            <img
              class="w-20 h-20 logo"
              src={logo}
            />
            <span class="ml-2 text-xl">The Fourth Square</span>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                href="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="/feature"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Feature
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                exact
                href="/pricing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pricing
              </a>
            </li> */}
            <li className="nav-item">
              <div className="dots"></div>
              <a
                exact
                href="/launch2022"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Launch 2022
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="/courses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="/blogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="/quadrangle"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Quadrangle
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};
