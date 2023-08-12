import React,{useContext} from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import SearchResult from '../pages/SearchResult'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/register'
import Login from '../pages/login'
import ThankYou from '../pages/ThankYou'
import AddCustomForm from '../pages/Customize'
import SupportAdmin from '../services/SupportAdmin'
import ProfilePage from '../pages/profile'
import Admin from '../pages/Admin'
import {BASE_URL} from '../utils/config'
import useFetch from '../hooks/useFetch'
import {authContext} from '../context/authContext'
// import Sidebar from '../components/admin/sideBar'

// import Home1 from '../src/Home'

// import 

// import Footer_M from '../mechcart/Footer_M'

const Routers = () =>{
  const {user} = useContext(authContext)

  const {data:users} = useFetch(`${BASE_URL}/users`)

  let isAdmin = user && users?.map((users) => {
    if(user._id===users._id && users.role === 'admin')
    return 'admin'
    else
    return ''
  })
  return(
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/customize' element={<AddCustomForm />} /> 
        <Route path='/tours' element={<Tours />} /> 
        <Route path='/tours/:id' element={<TourDetails />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/tours/search' element={<SearchResult />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/support' element={<SupportAdmin />} />
        <Route path='/profile' element={<ProfilePage />} />
        {
          isAdmin && <Route path='/admin' element={<Admin />}/>
        }
        {/* <Route path='/footer' element={<Footer_M />} /> */}
        {/* <Route path='/Home1' element={<Home1 />} /> */}
    </Routes>
  );
};

export default Routers;