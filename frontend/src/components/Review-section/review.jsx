
import React from 'react'
import Slider from 'react-slick'
import Mandan from '../../assets/images/ava-1.jpg'
import Jerin from '../../assets/images/ava-2.jpg'
import Amal from '../../assets/images/ava-3.jpg'
import Unni from '../../assets/images/ava-4.jpg'
import Jacob from '../../assets/images/ava-05.jpg'

import './review-css.css';

const Review = () => {

  const settings = {
    dots   : true,
    infinite : true,
    autoplay : true,
    speed : 2000,
    swipeToSlide : true,
    autoplaySpeed : 2000,
    slidesToShow : 3,

    responsive : [
      {
        breakpoint: 992,
        settings:
        {
          slidesToShow : 2,
          slidesToScroll : 1,
          infinite : true,
          dots : true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow : 1,
          slidesToScroll : 1,
        },
      },
    ]
  }

  return (
    <Slider {...settings}>
        <div className='review py-4 px-3'>
            <p>Valare Nalla oru tour arin, kollam poli saanm.<b>TravelWorld </b> oru nalla company aanu guys.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={Mandan} className='img__avatar' alt=''/>
              <div>
                <h4 className='mb-0 mt-3'>
                  Mandhan
                </h4>
                <p>Veruthe poyavan</p>
              </div>
            </div>
        </div>
        <div className='review py-4 px-3'>
            <p>"Ith polete tour swapnangalil mathram". Paid promotion alla ketto my genuine opinion aanu - Enn swantham <b>JCube</b>
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={Jerin} className='img__avatar' alt=''/>
              <div>
                <h4 className='mb-0 mt-3'>
                  JCube
                </h4>
                <p>Not Paid Review</p>
              </div>
            </div>
        </div>
        <div className='review py-4 px-3'>
            <p>Nalla vibe indarn kurach koode better aakarn. Especially Guide oru kuppi vellam koode vangi thannila</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={Amal} className='img__avatar' alt=''/>
              <div>
                <h4 className='mb-0 mt-3'>
                  Sayu Mon
                </h4>
                <p>Regular Traveler</p>
              </div>
            </div>
        </div>
        <div className='review py-4 px-3'>
            <p>As far as I consider This Tour was Amazing, Fantastic, Boombastic and Elastic. VeryGood <b>TravelWorld</b></p>
            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={Unni} className='img__avatar' alt=''/>
              <div>
                <h4 className='mb-0 mt-3'>
                  Unni
                </h4>
                <p>Experienced Traveler</p>
              </div>
            </div>
        </div>
        <div className='review py-4 px-3'>
            <p>As far as I consider This Tour was Amazing, Fantastic, Boombastic and Elastic. VeryGood <b>TravelWorld</b></p>
            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={Jacob} className='img__avatar' alt=''/>
              <div>
                <h4 className='mb-0 mt-3'>
                  Jacob
                </h4>
                <p>Tripping Veeran</p>
              </div>
            </div>
        </div>
    </Slider>
  ) 
}

export default Review