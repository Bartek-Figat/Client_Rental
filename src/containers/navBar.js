import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import square from '../images/logo-square.svg';
import Logout from '../components/logout/Logout';


const NavBar = () => {
   const token = localStorage.getItem('token');
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="nav-link" className="navbar-brand py-1" to="/">
              <img
                src={square}
                alt="Directory logo"
                style={{ maxWidth: '4rem' }}
              />
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
            <AiOutlineBars className="fa fa-bars" />
            
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
                    <button
                      className="nav-link logout-btn"
                      onClick={() => Logout()}
                    >
                      Sign out{' '}
                    </button>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
