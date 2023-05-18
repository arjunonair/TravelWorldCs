import React ,{useState, useEffect} from 'react'
import CommonSection from '../shared/commonSection.jsx'

import '../styles/tours.css'
import tours from '../assets/data/tours.js'
import Newsletter from '../shared/NewsLetter.jsx'
import TourCard from '../shared/TourCard.jsx'
import SearchBar from '../shared/SearchBar.jsx'
import { Link } from 'react-router-dom'

import {Container, Row,Col, Button } from 'reactstrap'

const Tours = () => {


  const [pageCount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  useEffect (()=>{

    const pages = Math.ceil(5/ 4) //backend data count
    setPageCount(pages)
  },[page])

  return (
    <>
    <CommonSection title={'All tours'}/>

    <section className='Tour__section'>
      <Container className='search__tour'>
        <Row >
          <SearchBar />
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            tours?.map(tour=>(
               <Col lg='3' className='mb-4' key={tour.id}>
              <TourCard tour={tour} />
               </Col>
               ))}

          <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=> setPage(number)}
                className={page === number ? 'active__page' : ''}>
                  {number + 1}
                </span>
              ))}
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Button className='btn primary__btn custom'>
            <Link to='/customizable'>
              Customize your Tour
            </Link>
    </Button>
    <Newsletter/>
    </>
  )
}

export default Tours