import React,{useEffect} from 'react';
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
import Experienceimg from '../assets/images/experienceimg.png';
import ImageGallery from '../components/image-gallery/imageGallery';
import Review from '../components/Review-section/review';
import Newsletter from '../shared/NewsLetter';
import SupportEngine from '../services/supportengine';
import Footer from '../components/footer/footer'


const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0) 
   })
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
        {/* experience section*/}
        <section>
          <Container>
            <Row>
              <Col lg='6'>
                <div className='experience__content'>
                  <Subtitle subtitle={'Experience'} />
                  <h2 >With all our experience<br />We will serve you</h2>
                  <p>lorem lorem lorem</p>
                </div>

                <div className='counter__wrapper d-flex align-items-center gap-5'>
                  <div className='counter__box'>
                    <span>0</span>
                    <h6>Successful Trips</h6>
                  </div>

                  <div className='counter__box'>
                  <span>0</span>
                  <h6>Regular Clients</h6>
                  </div>

                  <div className='counter__box'>
                  <span>0</span>
                  <h6>Work Experience</h6>
                  </div>
                  
                </div>
              </Col>
              <Col lg='6'>
                <div className='experience__img'>
                  <img src={Experienceimg} alt=''/>
                </div>
              </Col>
           </Row>
          </Container>
        </section>

        {/* gallery section */}
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className='gallery__title'>Visit our customers tour gallery</h2>
              </Col>
              <Col lg='12'>
              <ImageGallery />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Review section */}
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={"Reviews"} />
                <h2 className='review__title'>Our Customers note</h2>
              </Col>
              <Col lg='12'>
                <Review />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer section */}
        <SupportEngine />
        <Newsletter />
        <Footer />

  </>
}

export default Home