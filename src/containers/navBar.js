import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import square from '../images/logo.svg';
import Logout from '../components/logout/Logout';


const NavBar = () => {
   const token = localStorage.getItem('token');
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="nav-link" className="navbar-brand py-1" to="/">
              <img src={square} alt="Directory logo" />
            </Link>
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
              {!token ? (
                <Fragment>
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
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={() => Logout()}> Sign out </button>
                  </li>
                </Fragment>
              )}
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
