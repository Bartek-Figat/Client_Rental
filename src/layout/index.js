import React, { Fragment } from 'react';
import NavBar from '../containers/navBar';
import HeroSection from '../containers/heroSection';
import ImageSlider from '../containers/img_slider';
import Investment from '../containers/investment';
import Opportunities from '../containers/opportunities';
import Footer from '../containers/footer';
import Account from '../containers/account';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroSection />
      <ImageSlider />
      <Investment />
      <Opportunities />
      <Account />
      <Footer />
    </Fragment>
  );
};

export default Layout;
