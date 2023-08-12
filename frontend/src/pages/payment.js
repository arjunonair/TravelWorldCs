import React, {useEffect,useState} from 'react';
import {loadStripe} from '@stripe/stripe-js'

const Payment = (props) => {
    const [stripePromise,setStripePromise] = useState(null);

    useEffect(()=>{
        fetch("/config").then(async(r) => {
            const {publishablekey} = await r.json();
            console.log(publishablekey);
        })
    },[])
  return (<>
    <h1>payment</h1>
    </>);
}

export default Payment