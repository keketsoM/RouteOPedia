import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo192.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#">
          <img src={logo} alt="React" height="36px"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active text-danger" : "nav-link"
                }
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/product">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/product/create">
                    Create Product
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/product/detail">
                    Product Detail
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/product/list">
                    Product List
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" aria-disabled="true">
                Disabled
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
