import React from 'react';
const Footer = () => {
  return (
    <footer className="position-relative z-index-10 d-print-none">
      <div className="py-6 bg-gray-200 text-muted">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="font-weight-bold text-uppercase text-dark mb-3">
                Directory
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    className="text-muted text-hover-primary"
                    href="#"
                    target="_blank"
                    title="twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-muted text-hover-primary"
                    href="#"
                    target="_blank"
                    title="facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-muted text-hover-primary"
                    href="#"
                    target="_blank"
                    title="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-muted text-hover-primary"
                    href="#"
                    target="_blank"
                    title="pinterest"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-muted text-hover-primary"
                    href="#"
                    target="_blank"
                    title="vimeo"
                  >
                    <i className="fab fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Rentals</h6>
              <ul className="list-unstyled">
                <li>
                  <a className="text-muted" href="index.html">
                    Rooms{' '}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="category-rooms.html">
                    Map on top{' '}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="category-2-rooms.html">
                    Side map{' '}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="category-3-rooms.html">
                    No map{' '}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="detail-rooms.html">
                    Room detail{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Pages</h6>
              <ul className="list-unstyled">
                <li>
                  <a className="text-muted" href="compare.html">
                    Comparison{' '}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="team.html">
                    Team{' '}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="contact.html">
                    Contact{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-uppercase text-dark mb-3">
                Daily Offers Discounts
              </h6>
              <p className="mb-3">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
              <form action="#" id="newsletter-form">
                <div className="input-group mb-3">
                  <input
                    className="form-control bg-transparent border-dark border-right-0"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-dark border-left-0"
                      type="submit"
                    >
                      {' '}
                      <i className="fa fa-paper-plane text-lg"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <p className="text-sm mb-md-0">
                &copy; 2020, Your company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
