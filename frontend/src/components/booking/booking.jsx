
import React,{useState ,useContext } from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import {authContext} from '../../context/authContext'
import { htmlCode } from '../admin/template.js';

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
      // const input = e.target;
      // let value = input.value;
    
      // if (value.length > 10) {
      //   value = value.slice(0, 10);
      //   input.value = value;
      // }
      setBooking(prev=>({...prev,[e.target.id]:e.target.value,tourName:title
    }));
    }
    const serviceFee =  (Number(price) * Number(booking.guestSize))/20;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    //send data to the server
  const handleClick= async e=>{
      e.preventDefault()
      // setBooking({...booking,tourName:title})
      if(booking.phone.length<10 ||!/^\d+$/.test(booking.phone))
      {
        alert('Mobile number should be 10 digits and contains only Number')
      }
      else{
      if(booking.fullName==='' || booking.bookAt==='' ||booking.guestSize==='')
      {
        alert('Please fill all fields')
        // window.location.reload()
      }
      else{
      try {
        if(!user || user===undefined || user===null){
          return alert('please sign in...')
        }
        const options = {
          key: "rzp_test_vc8XY2Q34138RT",
          key_secret: "Wg893VmTA2VegApQqTzMZS9Z",
          amount: totalAmount*100,
          currency: 'INR',
          order_id: booking._id,
          name: 'Travel World',
          description: 'Tour booking..',
          handler: function (response) {
            // Handle successful payment
            console.log('Payment successful:', response);
            // Complete the booking process on your server
            completeBooking();
          },
          prefill: {
            name: user.username,
            email: user.email,
          },
          notes: {
            address: 'Razorpay Corporate office',
          },
          theme: {
            color: '#3399cc',
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Error during payment:', error);
        alert('An error occurred during payment.');
      }
    };
  }
}
  
  const completeBooking = async () => {
      try {
        const response = await fetch(`${BASE_URL}/booking`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(booking),
        });
  
        if (!response.ok) {
          const result = await response.json();
          return alert(result.message);
        }
        // Redirect to thank-you page on successful booking
        navigate('/thank-you');
      }
      catch (error) {
        console.error('Error booking:', error);
        alert('An error occurred while booking.');
      }
};

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
        <input type='tel' inputMode='numeric' placeholder='Phone' id='phone' pattern="[0-9]{10}" required  maxLength='10' minLength='10' onChange={handleChange} className='no-spinner'/>
      </FormGroup>

      <FormGroup className='d-flex align-items-center gap-3'>
      <input
        type='date'
        placeholder=''
        id='bookAt'
        required
        onChange={handleChange}
        min={new Date().toISOString().split('T')[0]}
      />
        <input type='number' placeholder='Group Size' id='guestSize' required onChange={handleChange} className='no-spinner'
        onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}/>
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
          <span>Rs {totalAmount}</span>
        </ListGroupItem>

      </ListGroup>
      <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now!</Button>
    </div>
  </div>
}

export default Booking

//Mastercard : 5267 3181 8797 5449
//visa : 4111 1111 1111 1111