import React from 'react';
import { Col,Row,Container } from 'reactstrap';
import './newsletter-css.css';

import maletourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__container'>
                    <h2>
                        Subscribe to get our services
                    </h2>

                    <div className='newsletter__input'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>lorem</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maletourist} alt='Male Tourist' />
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Newsletter