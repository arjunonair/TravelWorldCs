import React ,{useState, useEffect} from 'react'
import CommonSection from '../shared/commonSection.jsx'
import '../styles/tours.css'
import Newsletter from '../shared/NewsLetter.jsx'
import TourCard from '../shared/TourCard.jsx'
import SearchBar from '../shared/SearchBar.jsx'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import { BASE_URL } from '../utils/config.js'
import Footer from '../components/footer/footer'

import {Container, Row,Col, Button } from 'reactstrap'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  const {data:tourData} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect (()=>{

    const pages = Math.ceil(tourCount/ 8)
    setPageCount(pages)
    window.scrollTo(0,0)
  },[page, tourCount,tourData])

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
          {/* {loading && <h4 className='text-center pt-5'>Loading.....</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>} */}
        {
(          <Row>
          {
            tourData?.map(tour=>(
               <Col lg='3' className='mb-4' key={tour._id}>
              <TourCard tour={tour} />
               </Col>
               ))
          }

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
        </Row>)
        }
      </Container>
    </section>
    <Newsletter/>
    <Footer />
    </>
  )
}

export default Tours