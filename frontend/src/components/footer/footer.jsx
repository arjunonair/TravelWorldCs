import React from 'react'

import {Col,Container,Row ,ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import "./footer.css"

const fut__links=[
  {
    path:'/home',
    display:'Home'
  },

  {
    path:'/about',
    display:'About'
  },

  {
    path:'/tours',
    display:'Tours'
  }
];

const fut__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },

  {
    path:'/login',
    display:'Login'
  },

  {
    path:'/register',
    display:'Register'
  }
];
const year = 2023;
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src = {logo} alt=''/>
              <p>lorem ipsum</p>
            </div>

            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to='#'><i class="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>

            <ListGroup className='footer__quick-link'>
              {
                fut__links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                )
                )
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>

            <ListGroup className='footer__quick-link'>
              {
                fut__links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                )
                )
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>

        <ListGroup className='footer__quick-link'>
          
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address: 
                </h6>

                <p className='mb-0 '>Kerala, India</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email: 
                </h6>

                <p className='mb-0 '>travelworld@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone: 
                </h6>

                <p className='mb-0 '>+91 9999999999</p>
              </ListGroupItem>
        </ListGroup>
          </Col>
        <Col lg='12' className='text-center pt-5'>
          <p className='copyright'>
            Copyright @ {year}, design and develop by <b>TAKEZO</b> the Almighty. All rights reserved</p>
        </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer