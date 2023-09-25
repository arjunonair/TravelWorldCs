
import React from 'react'

import {Col,Container,Row } from 'reactstrap'
import {Link} from 'react-router-dom'

import mech from './mechkart.svg'
import './Footer_M.css'

const fut__links=[
  {
    path:'/',
    display:'Laptops & Computers'
  },
  {
    path:'/',
    display:'Cameras & Photography'
  },
  {
    path:'/',
    display:'Smart Phones & Tablets'
  },
  {
    path:'/',
    display:'Video Games & Consoles'
  },
  {
    path:'/',
    display:'Waterproof Headphones'
  }
];

const fut__links2=[
  {
    path:'/',
    display:'My Account'
  },

  {
    path:'/',
    display:'Discount'
  },

  {
    path:'/',
    display:'Returns'
  },
  {
    path:'/',
    display:'Orders History'
  },
  {
    path:'/',
    display:'Order Tracking'
  }
];

const fut__links3 = [
  {
    path:'/',
    display:'Browse the Shop'
  },
  {
    path:'/',
    display:'Category'
  }
]


const year = 2023;
const Footer_M = () => {
  return <>
    <section className='p-0'>
    <footer className='footer'>
      <Container className='cont__footer'>
        <Row>
          <Col lg='5'>
            <div className='logo__footer'>
              <img src = {mech} alt=''/>
              <div className='footer__input'>
                    <input type='text' placeholder='Enter Email Address' required/>
                    <button className='btn text-white' type='submit'>
                    Sign Up
                    </button>
              </div>
            </div>

            <div className='contact__links d-flex align-items-left gap-1 flex-column'>
              <span className='d-flex align-items-center mt-3 justify-between'>
                Contact info
              </span>
              <span>
              17 Princess Road, London, Greater London NW1 8JR, UK
              </span>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Categories</h5>

            <ul className='footer__quick-link'>
              {
                fut__links.map((item,index)=>(
                  <li key={index} className='_footer__li'>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                )
                )
              }
            </ul>
          </Col>

          <Col lg='2' className='footer__link-main'>
          <h5 className='footer__link-title'>Customer Care</h5>

            <ul className='footer__quick-link'>
              {
                fut__links2.map((item,index)=>(
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                )
                )
              }
            </ul>
          </Col>
          <Col lg='2'>
          <h5 className='footer__link-title'>Pages</h5>
          <ul className='footer__quick-link'>
            {
              fut__links3.map((item,index)=>
              <li key={index}>
                <Link to={item.path}>{item.display}</Link>
              </li>
              )
            }
          </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    </section>
    <section className='p-0 align-items-center footer__bottom'>
      <Container >
        <Row>
          <Col lg='3' className='text-center'>
          <p className='copyright'>
          ©Webecy - All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
    </>
}

export default Footer_M
