import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/register'
import Login from '../pages/login'

const Routers = () =>{
  return(
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} /> 
        <Route path='/tours/:id' element={<TourDetails />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/tours/search' element={<SearchResult />} /> 
        <Route path='/register' element={<Register />} />
    </Routes> 
  );
};

export default Routers;