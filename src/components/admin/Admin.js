import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../containers/navBar';
import Footer from "../../containers/footer";
import img_one from '../../images/photo/photo-1484154218962-a197022b5858.jpg';
import img_two from '../../images/photo/photo-1488805990569-3c9e1d76d51c.jpg';
import img_three from '../../images/photo/photo-1467987506553-8f3916508521.jpg';
import img_four from '../../images/photo/photo-1426122402199-be02db90eb90.jpg';
import img_five from '../../images/photo/restaurant-1515164783716-8e6920f3e77c.jpg';

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
        if (err) {
          localStorage.removeItem('token');
          window.location.href = '/';
        }
      }
    }
    fetchData();
  }, []);


    const sectionStyle = {
      backgroundImage: `url(https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)`,
    }

  return (
    
    <div>
      <Navbar />{' '}
      {loading ? (
        <section className="py-5">
<Fragment>
<section className="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover" style={sectionStyle}>
      <div className="container overlay-content">
        <div className="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
          <div className="text-white mb-4 mb-lg-0">
            <div className="badge badge-pill badge-transparent px-3 py-2 mb-4">Eat  Drink</div>
            <h1 className="text-shadow verified">Fifteen Restaurant  Bar</h1>
            <p><i className="fa-map-marker-alt fas mr-2"></i> 53 Broadway  Brooklyn, NY 1129</p>
            <p className="mb-0 d-flex align-items-center"><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-gray-200 mr-4">                   </i>8 Reviews</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="text-block">
              <h3 className="mb-3">About</h3>
              <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
              <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Location</h3>
              <div className="map-wrapper-300 mb-3">
                <div className="h-100" id="detailMap"></div>
              </div>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Gallery</h3>
              <div class="text-block">
              <div class="row gallery ml-n1 mr-n1">
                <div class="col-lg-4 col-6 px-1 mb-2"><img class="img-fluid"  src={img_five} alt="..."/></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><img class="img-fluid"  src={img_five} alt="..."/></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><img class="img-fluid"  src={img_five} alt="..."/></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><img class="img-fluid"  src={img_five} alt="..."/></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><img class="img-fluid"  src={img_five} alt="..."/></div>
                <div class="col-lg-4 col-6 px-1 mb-2"><img class="img-fluid"  src={img_five} alt="..."/></div>
              </div>
            </div>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Amenities</h3>
              <ul className="amenities-list list-inline">
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div><span>Elevator</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div><span>Vegan friendly</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div><span>Alcohol served</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div><span>No smoking</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div><span>Parking spaces (paid)</span>
                  </div>
                </li>
                <li className="list-inline-item mb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div><span>WiFi</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pl-xl-4">
              <div className="card border-0 shadow mb-5">
                <div className="card-header bg-gray-100 py-4 border-0">
                  <div className="media align-items-center">
                    <div className="media-body">
                      <p className="subtitle text-sm text-primary">Opening in 5 minutes</p>
                      <h4 className="mb-0">Opening Hours </h4>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table text-sm mb-0">
                    <tr>
                      <th className="pl-0 border-0">Sunday</th>
                      <td className="pr-0 text-right border-0">8:00 am - 6:00 pm</td>
                    </tr>
                    <tr>
                      <th className="pl-0">Monday</th>
                      <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                    </tr>
                    <tr>
                      <th className="pl-0">Tuesday</th>
                      <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                    </tr>
                    <tr>
                      <th className="pl-0">Wednesday</th>
                      <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                    </tr>
                    <tr>
                      <th className="pl-0">Thursday</th>
                      <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                    </tr>
                    <tr>
                      <th className="pl-0">Friday</th>
                      <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                    </tr>
                    <tr>
                      <th className="pl-0">Saturday</th>
                      <td className="pr-0 text-right">Closed</td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <div className="card border-0 shadow mb-5">
                <div className="card-header bg-gray-100 py-4 border-0">
                  <div className="media align-items-center">
                    <div className="media-body">
                      <p className="subtitle text-sm text-primary">Drop Us a Line</p>
                      <h4 className="mb-0">Contact</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"> <a className="text-gray-00 text-sm text-decoration-none" href="#"><i className="fa fa-phone mr-3"></i><span className="text-muted">020 123 456 789</span></a></li>
                    <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fa fa-envelope mr-3"></i><span className="text-muted">info@example.com</span></a></li>
                    <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fa fa-globe mr-3"></i><span className="text-muted">www.example.com</span></a></li>
                    <li className="mb-2"> <a className="text-blue text-sm text-decoration-none" href="#"><i className="fab fa-facebook mr-3"></i><span className="text-muted">Facebook</span></a></li>
                    <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fab fa-twitter mr-3"></i><span className="text-muted">Twitter</span></a></li>
                    <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fab fa-instagram mr-3"></i><span className="text-muted">Instagram</span></a></li>
                    <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fab fa-google-plus mr-3"></i><span className="text-muted">Google+</span></a></li>
                  </ul>
                  <div className="text-center"><a className="btn btn-outline-primary btn-block" href="#"> <i className="far fa-paper-plane mr-2"></i>Send a Message</a></div>
                </div>
              </div>
              <div className="text-center">
                <p><a className="text-secondary" href="#"> <i className="fa fa-heart"></i> Bookmark This Listing</a></p><span>79 people bookmarked this place </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
</Fragment>
    
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
      
      <Footer/>
    </div>
  );
};
export default Admin;
