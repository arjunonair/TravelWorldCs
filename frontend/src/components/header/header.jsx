import React from 'react'
import {Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo2.png'

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },

  {
    path:'#',
    display:'About'
  },

  {
    path:'/tours',
    display:'Tours'
  }

]
const Header = () => {
  return <header classname="header">
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center
        justify-content-between">
          
          <div className="logo">
            <img className='photo' src={logo} width={650} height={200} alt="" />
          </div>
          
        </div>
      </Row>
    </Container>
  </header>
  
}

export default Header