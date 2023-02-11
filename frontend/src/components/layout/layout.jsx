import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Routers from '../../router/routers'

const Layout = () => {
  return (
    <>
    <Header />
    <Routers/>
    <Footer/>
    </>
  );
};

export default Layout