import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/register'
import Login from '../pages/login'
import ThankYou from '../pages/ThankYou'
import Customize from '../pages/Customize'
// import Footer_M from '../mechcart/Footer_M'

const Routers = () =>{
  return(
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/customize' element={<Customize />} />
        <Route path='/tours' element={<Tours />} /> 
        <Route path='/tours/:id' element={<TourDetails />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/tours/search' element={<SearchResult />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        {/* <Route path='/footer' element={<Footer_M />} /> */}
    </Routes>
  );
};

export default Routers;