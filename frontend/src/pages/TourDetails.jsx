import React from 'react'
import '../styles/tour-details.css'

import { Container,Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tours from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating';

const TourDetails = () => {



  const {id} = useParams()

  const tour = tours.find(tour=> tour.id===id) //later backend

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour

  const {totalRating,avgRating} = calculateAvgRating(reviews);

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour__content'>
              <img src={photo} alt='' />

              <div className='tour__info'>
                <h2>{title}</h2>

                <div className='d-flex align-items-center gap-5'>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class="ri-star-fill" style={{color: "var(--secondary-color)"}}></i> 
                    {avgRating === 0? null : avgRating}
                    {totalRating === 0 ? 'Not yet Reviewed' : 
                      <span>
                        ({reviews?.length})
                      </span>}

                 </span>

                 <span >
                 <i class="ri-map-pin-fill"></i>
                 {address}
                 </span>
                </div>

                <div className='tour__extra__details'>
                <span>
                <i class="ri-map-pin-2-line"></i>
                 {city}
                 </span>
                 <span >
                 <i class="ri-price-tag-3-fill"></i>
                 Rs.{price}/ Per Person
                 </span>
                 <span >
                 <i class="ri-group-fill"></i>
                 {maxGroupSize}
                 </span>
                </div>

                <div className='tour__reviews mt-4'>
                  <h4>Reviews({reviews?.length} reviews)</h4>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default TourDetails