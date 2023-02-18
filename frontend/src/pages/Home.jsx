import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/subtitles'

const Home = () => {
  return <>
  {/*hero container*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center color" >
              <Subtitle subtitle={'Explore the world'}/>
              <img src={worldImg} alt="" />
              </div>
              <h1>Travelling Made easy with us{" "}
              <span className='hightlight'>CekTravelWorld</span>
              </h1>
              <p>
              While the reasons for travelling are many, we must not forget that it can be a refreshing experience. Travelling is an experience that can teach us so many things that you cannot possibly learn while living at home.
Firstly, it teaches you how to make new friends. The world is full of people who love interacting. You get to make friends when you travel to new places and spend quality time with them.
Moreover, it also helps you enhance your social skills. After that, travelling is great for learning new skills. For instance, going to mountain regions teaches you how to trek. Similarly, going to beaches helps you learn scuba diving or surfing.
You can also enjoy the beauty of nature when you travel. Similarly, you get to explore nature like never before and find discover the earth’s beauty. Travelling also helps us understand people.
After you spend time at a new place, you interact with the local people of the place. You learn so much about them and their culture. It makes you more open-minded and be mindful of the culture and beliefs of different people.
              </p>
          </div>
        </Col>
      </Row>
    </Container>
    </section>

  </>
}

export default Home