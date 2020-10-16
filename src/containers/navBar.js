import React from 'react';
import { Link } from 'react-router-dom';
import square from '../images/logo.svg';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand py-1" href="index.html">
              <img src={square} alt="Directory logo" />
            </a>
          </div>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
                <a className="btn btn-primary" href="user-add-0.html">
                  Add a listing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
