import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../containers/navBar';

const Admin = () => {
  const [userCredentials, setUserCredentials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const jwt = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:8080/admin', {
          credentials: 'include',
          headers: {
            'x-access-token': jwt,
          },
        });

        setUserCredentials(data);
        setLoading(true);
        return data;
      } catch (err) {
        if (err.response.data.error === 'Access denied') {
          localStorage.removeItem('token');
          window.location.href = '/';
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />{' '}
      {loading ? (
        <section className="py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-end mb-5 booking-header">
              <h1 className="hero-heading mb-0">Your nearest bookings</h1>
              <li className="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
                <a className="btn btn-primary" href="user-add-0.html">
                  Add a listing
                </a>
              </li>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row mb-5">
              <div className="mr-3">
                <p className="mb-3 mb-lg-0">
                  You have <strong>12 bookings</strong> in your property
                </p>
              </div>
            </div>
            <div className="list-group shadow mb-5">
              <Link className="list-group-item list-group-item-action p-4">
                <div className="row">
                  <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
                    <div className="d-flex align-items-center mb-3">
                      <h2 className="h5 mb-0">Meredith Goodwin</h2>
                      <img
                        className="avatar avatar-sm avatar-border-white ml-3"
                        src="img/avatar/avatar-0.jpg"
                        alt="Jack London"
                      />
                    </div>
                    <p className="text-sm text-muted">Double Room</p>
                    <span className="badge badge-pill p-2 badge-secondary-light">
                      February 16, 2019 - February 19, 2019
                    </span>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                        <h6 className="label-heading">Rate type</h6>
                        <p className="text-sm font-weight-bold">
                          Bed Breakfast
                        </p>
                        <h6 className="label-heading">Nights </h6>
                        <p className="text-sm font-weight-bold mb-0">3</p>
                      </div>
                      <div className="col-6 col-md-4 col-lg-3 py-3">
                        <h6 className="label-heading">Occupancy</h6>
                        <p className="text-sm font-weight-bold">1 pax</p>
                        <h6 className="label-heading">Charge</h6>
                        <p className="text-sm font-weight-bold mb-0">$244.42</p>
                      </div>
                      <div className="col-6 col-md-4 col-lg-3 py-3">
                        <h6 className="label-heading">Booked Date</h6>
                        <p className="text-sm font-weight-bold">
                          February 16, 2019{' '}
                        </p>
                        <h6 className="label-heading">Arrival Time</h6>
                        <p className="text-sm font-weight-bold mb-0">
                          Around 4 PM
                        </p>
                      </div>
                      <div className="col-12 col-lg-3 align-self-center">
                        <span className="text-primary text-sm text-uppercase mr-4 mr-lg-0">
                          <i className="fa fa-check fa-fw mr-2"> </i>Booking
                          paid
                        </span>
                        <br className="d-none d-lg-block" />
                        <span className="text-primary text-sm text-uppercase">
                          <i className="fa fa-check fa-fw mr-2"> </i>Confirmed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      )}
    </div>
  );
};
export default Admin;
