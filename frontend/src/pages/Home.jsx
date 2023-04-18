import React from 'react';
import '../styles/home.css';
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/heroimg_2.jpg';
// import heroImg02 from '../assets/images/hero-img02.jpg';
// import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/subtitles';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/serviceList';
import FeaturedTourList from '../components/featuredTour/FeaturedTourList';

const Home = () => {
  return <>
  {/*hero container*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center justify-content-space-between">
              <Subtitle subtitle={'Explore the world'}/>
              <img src={worldImg} alt="" />
              </div>
              <h1>Travelling Made easy with us{" "}
              <span className="highlight">TravelWorldCs</span>
              </h1>
              <p>Welcome to <b>TravelWorld</b>, where you can discover exciting destinations, plan your dream vacations, and create unforgettable memories. From beautiful beaches and scenic mountains to vibrant cities and charming small towns, we offer a wide range of travel options to suit every taste and budget</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt=""/>
          </div>
        </Col>
        {/* <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt=""/>
          </div>
        </Col> */}
        <SearchBar/>
      </Row>
    </Container>
    </section>

    {/* Services section */}
    
        <section>
          <Container>
            <Row>
              <Col lg='3'>
                <Subtitle subtitle={'What We Serve'} />
                <h2 className='services__title'>We offer our best Services</h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
        </section>

        {/* Featured Tour */}
        <section>
          <Container>
            <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
            </Row>
          </Container>
        </section>
  </>
}

export default Home