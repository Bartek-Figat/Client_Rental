import React, { Fragment } from 'react';
import NavBar from '../containers/navBar';
import HeroSection from '../containers/heroSection';
import ImageSlider from '../containers/img_slider';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroSection />
      <ImageSlider />
    </Fragment>
  );
};

export default Layout;
