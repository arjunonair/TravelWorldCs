import React from 'react';
import '../styles/home.css';
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/heroimg_2.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/subtitles';
import SearchBar from '../shared/SearchBar';

const Home = () => {
  return <>
  {/*hero container*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center justify-content-space-between>
              
              <Subtitle subtitle={'Explore the world'}/>
              <img src={worldImg} alt="" />
              </div>
              <h1>Travelling Made easy with us{" "}
              <span className="highlight">TravelWorldCs</span>
              </h1>
              <p>Travelling is an experience that can teach us so many things that you cannot possibly learn while living at home.
Firstly, it teaches you how to make new friends. The world is full of people who love interacting. You get to make friends when you travel to new places and spend quality time with them.You get to explore nature like never before and find discover the earth’s beauty. Travelling also helps us understand people. You learn so much about them and their culture. It makes you more open-minded and be mindful of the culture and beliefs of different people.
              </p>
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

  </>
}

export default Home