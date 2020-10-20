import React from 'react';
import { FcMindMap } from 'react-icons/fc';
const Account = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="hero-heading mb-0">Your account</h1>
        <p className="text-muted mb-5">
          Manage your account and settings here.
        </p>
        <div className="row">
          <div className="col-6 col-md-4 mb-30px">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
                  </div>
                </div>
                <h5 className="card-title mb-3">
                  <a
                    className="text-decoration-none text-dark stretched-link"
                    href="user-personal.html"
                  >
                    Personal info
                  </a>
                </h5>
                <p className="text-muted card-text text-sm">
                  Provide personal details and how we can reach you
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-30px">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
                  </div>
                </div>
                <h5 className="card-title mb-3">
                  <a
                    className="text-decoration-none text-dark stretched-link"
                    href="user-security.html"
                  >
                    Login &amp; security
                  </a>
                </h5>
                <p className="text-muted card-text text-sm">
                  Update your password and secure your account
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-30px">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
                  </div>
                </div>
                <h5 className="card-title mb-3">
                  <a
                    className="text-decoration-none text-dark stretched-link"
                    href="#"
                  >
                    Payments &amp; payouts
                  </a>
                </h5>
                <p className="text-muted card-text text-sm">
                  Review payments, payouts, coupons, gift cards, and taxes
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-30px">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
                  </div>
                </div>
                <h5 className="card-title mb-3">
                  <a
                    className="text-decoration-none text-dark stretched-link"
                    href="#"
                  >
                    Notifications
                  </a>
                </h5>
                <p className="text-muted card-text text-sm">
                  Choose notification preferences and how you want to be
                  contacted
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-30px">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
                  </div>
                </div>
                <h5 className="card-title mb-3">
                  <a
                    className="text-decoration-none text-dark stretched-link"
                    href="#"
                  >
                    Privacy &amp; sharing
                  </a>
                </h5>
                <p className="text-muted card-text text-sm">
                  Control connected apps, what you share, and who sees it
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 mb-30px">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
                  </div>
                </div>
                <h5 className="card-title mb-3">
                  <a
                    className="text-decoration-none text-dark stretched-link"
                    href="#"
                  >
                    Global preferences
                  </a>
                </h5>
                <p className="text-muted card-text text-sm">
                  Set your default language, currency, and timezone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
