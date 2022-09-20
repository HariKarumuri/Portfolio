import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [HamShow, setHamShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand">Hound-Force</a>
            <button
              className="navbar-toggler primary-green"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setHamShow(!HamShow);
              }}
            >
              <span className="navbar-toggler-icon  "></span>
            </button>
            <div
              className={`collapse navbar-collapse ${HamShow ? "show" : ""}   `}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className="nav-link pe-4"
                    aria-current="page"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/experience"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Experience
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
