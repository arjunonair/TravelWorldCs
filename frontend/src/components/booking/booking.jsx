
import React,{useState ,useContext } from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import {authContext} from '../../context/authContext'

import {BASE_URL} from '../../utils/config'
//Fetch not changed markkaa l
const Booking = ({tour, avgRating}) => {

    const {user} = useContext(authContext)
    const navigate = useNavigate();

    const {title, price, reviews} = tour

    const [booking,setBooking] = useState(
      {
        userId:user && user._id,
        userEmail: user && user.email,
        tourName: '',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
      }
    )
    const handleChange=(e)=>{
      setBooking(prev=>({...prev,[e.target.id]:e.target.value,tourName:title
    }));
    } 

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    //send data to the server
    const handleClick= async e=>{
      e.preventDefault()
      // setBooking({...booking,tourName:title})
      console.log(booking );
      try {
        if(!user || user===undefined || user===null){
          return alert('please sign in...')
        }
        const res = await fetch(`${BASE_URL}/booking`,{
          method: 'post',
          headers : {
            'content-type' : 'application/json'
          },
          credentials:'include',
          body : JSON.stringify(booking)
        })
        const result = await res.json()

        if(!res.ok)
        {
          return alert(result.message)
        }
      } 
      catch (err) {
        return alert(err.message)
      }
      navigate('/thank-you');
    }

  return <div className='booking'>
    <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>Rs{price}<span> Per Person</span></h3>
        <span className='tour__rating d-flex align-items-center'>
            <i class="ri-star-fill"></i>
            {avgRating === 0? null : avgRating}
            <span>
              ({reviews?.length})
            </span>
        </span>
    </div>
    {/* booking form */}
    <div className='booking__form'>
      <h5>Information</h5>
      <Form className='booking__info-form' onSubmit={handleClick}> 
      <FormGroup>
        <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <input type='number' inputMode='numeric' placeholder='Phone' id='phone' required onChange={handleChange}/>
      </FormGroup>
      <FormGroup className='d-flex align-items-center gap-3'>
        <input type='date' placeholder='' id='bookAt' required onChange={handleChange}/>
        <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}/>
      </FormGroup>
      </Form>
    </div>
    {/* booking bottom */}

    <div className='booking__bottom'>
      <ListGroup>
        <ListGroupItem className='border-0 px-0'>
          <h5>Rs{price}<i className='ri-close-line'></i> 1 person</h5>
          <span>Rs {price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <h5>Service Charge</h5>
          <span>Rs {serviceFee} </span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0 total'>
          <h5>Total </h5>
          <span>Rs {totalAmount}{title}</span>
        </ListGroupItem>
      </ListGroup>

      <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now!</Button>
    </div>
  </div>
}

export default Booking
