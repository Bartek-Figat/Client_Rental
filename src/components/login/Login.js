import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../config/index';
import { errMsg, serverErr } from '../../helpers/index';
import Background from '../../images/photo/photo-1497436072909-60f360e1d4b1.jpg';
import square from '../../images/logo-square.svg';


const LoginUserForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    useremail: '',
    userpassword: '',
  });
  const [userErrors, setErrors] = useState('');
  const [userError, setError] = useState('');
  const { useremail, userpassword } = userCredentials;
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  function redirectAfterLogin() {
    history.push('/admin');
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = {
        useremail,
        userpassword,
      };
      const { data } = await axios.post(`${baseUrl}login`, response);

      const { accessToken } = data.user;
      localStorage.setItem('token', accessToken);
      setLoading(true);
      redirectAfterLogin();
    } catch (err) {
      const { errors } = await err.response.data;
      const {  error } = await err.response.data;
      setError(error);
      setErrors(errors);
      setUserCredentials('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

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
                style={{ maxWidth: '12rem' }}
              />
              <h2>Welcome back</h2>
            </div>
            <form className="form-validate" onSubmit={handleSubmit}>
              <div className="alert">
                {userErrors ? errMsg(userErrors) : null}
              </div>
              <div className="alert">
                {userError ? serverErr(userError) : null}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="useremail"
                  id="loginUsername"
                  type="email"
                  placeholder="Email"
                  value={useremail || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <div className="row"></div>
                <input
                  className="form-control"
                  name="userpassword"
                  id="loginPassword"
                  placeholder="Password"
                  type="password"
                  value={userpassword || ''}
                  onChange={handleChange}
                />
              </div>
            
                <button className="btn btn-lg btn-block btn-primary">
                  Sign in
                </button>
           
            </form>
            <hr className="my-4" />
            <p className="text-center">
              <small className="text-muted text-center">
                Don't have an account yet?{' '}
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </small>
            </p>
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
