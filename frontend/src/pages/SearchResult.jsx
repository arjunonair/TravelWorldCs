import React, { useState } from 'react'
import CommonSection from '../shared/commonSection.jsx'
import { Col, Container, Row } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard.jsx'
// import NewsLetter from '../shared/NewsLetter.jsx'
import Newsletter from '../shared/NewsLetter.jsx'
import Footer from '../components/footer/footer'

const SearchResult = () => {

  const location = useLocation();
  const [data] = useState(location.state);

  return <>
    <CommonSection title = {"Tour search Result"}/>
    <section>
      <Container>
        <Row>
          {
            data.length === 0 ? (<h4 className='text-center'>No Tour Found..</h4>) : 
            (
              data.map((tour) => (
                <Col lg='3' className='mb-4' key={tour}>
                  <TourCard tour={tour} />
                </Col>
            ))
            )
          }
        </Row>
      </Container>
    </section>
    <Newsletter/>
    <Footer />
  </>
}

export default SearchResult