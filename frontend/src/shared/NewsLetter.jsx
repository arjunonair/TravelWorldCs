import React from 'react';
import { Col,Row,Container } from 'reactstrap';
import './newsletter-css.css';

import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter__section'>
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
                    <img src={maleTourist} alt='Male Tourist' />
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Newsletter