import React, { useState } from 'react';
import axios from "axios";
import square from '../../images/logo-square.svg';
import Background from '../../images/photo/photo-1497436072909-60f360e1d4b1.jpg';
import { baseUrl } from "../../config/index";
import { errMsg, serverErr } from '../../helpers/index';
const RegisterUserForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    useremail: '',
    userpassword: '',
  });
   const [userErrors, setErrors] = useState('');
   const [userError, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { username, useremail, userpassword } = userCredentials;

  const handleSubmit = async (e) => {
    try {
      const data = {
        username,
        useremail,
        userpassword,
      };
      e.preventDefault();

      await axios.post(`${baseUrl}register`, data);
      setSuccess('Registration successful. Please Verify Your Email Address');
      setError('');
      setUserCredentials('');
    } catch (err) {
      const { errors, error } = await err.response.data;
      setError(error);
      setErrors(errors);
      setSuccess('');
      setUserCredentials('');
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
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
            <div className="mb-4">
              <img
                className="img-fluid mb-4"
                src={square}
                alt="..."
                style={{ maxWidth: '4rem' }}
              />
              <h2>Sign up</h2>
              <p className="text-muted">
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samples lay spread out on the table.
              </p>
            </div>
            <form className="form-validate" onSubmit={handleSubmit}>
              <div className="alert">
                {userErrors ? errMsg(userErrors) : null}
              </div>
              <div className="alert">
                {userError ? serverErr(userError) : null}
              </div>
              {success ? (
                <div className="alert alert-success">{success}</div>
              ) : null}
              <div className="form-group">
                <label className="form-label"> Name</label>
                <input
                  className="form-control"
                  name="username"
                  id="loginUsername"
                  type="text"
                  placeholder="Name"
                  autoComplete="off"
                  value={username || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label"> Email address</label>
                <input
                  className="form-control"
                  name="useremail"
                  id="EmailAddress"
                  placeholder="Email"
                  type="email"
                  value={useremail || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label"> Password</label>
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
              <button
                className="btn btn-lg btn-block btn-primary"
                type="submit"
              >
                Sign up
              </button>
              <hr className="my-4" />
              <p className="text-sm text-muted">
                By signing up you agree to Directory's{' '}
                <a href="/">Terms and Conditions</a> and{' '}
                <a href="/">Privacy Policy</a>.
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

export default RegisterUserForm;
