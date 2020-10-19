import React from 'react';
import './container.css';

const sectionStyle = {
  border: 0,
  shadow: 0,
  backgroundColor: '#e9ecef',
};

const heroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)`,
  };
  return (
    <section
      className="d-flex align-items-center dark-overlay bg-cover"
      style={sectionStyle}
    >
      <div className="container py-6 py-lg-7 text-white overlay-content">
        <div className="row">
          <div className="col-xl-8">
            <h1 className="display-3 font-weight-bold text-shadow">
              Let us guide you home
            </h1>
            <p className="text-lg text-shadow mb-6">
              Uncover the best offers on the real estate market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroSection;
