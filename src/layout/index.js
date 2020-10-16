import React, { Fragment } from 'react';
import NavBar from '../containers/navBar';
import HeroSection from '../containers/heroSection';
import TabList from '../containers/tabList';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroSection />
      <TabList />
    </Fragment>
  );
};

export default Layout;
