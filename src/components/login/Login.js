import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Background from '../../images/photo/photo-1497436072909-60f360e1d4b1.jpg';
import square from '../../images/logo-square.svg';

const LoginUserForm = () => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`,
  };
  return (
    <div className="container-fluid px-3">
      <div className="row min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div className="mb-5">
              <img
                className="img-fluid mb-3"
                src={square}
                style={{ maxWidth: '4rem' }}
              />
              <h2>Welcome back</h2>
            </div>
            <form className="form-validate">
              <div className="form-group">
                <input
                  className="form-control"
                  name="loginUsername"
                  id="loginUsername"
                  type="email"
                  placeholder="name@address.com"
                />
              </div>
              <div className="form-group mb-4">
                <div className="row">
                  <div className="col-auto">
                    <a className="form-text small">Forgot password?</a>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="loginPassword"
                  id="loginPassword"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button className="btn btn-lg btn-block btn-primary">
                Sign in
              </button>
              <hr className="my-4" />
              <p className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet?{' '}
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          <div className="bg-cover h-100 mr-n3" style={sectionStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginUserForm;
