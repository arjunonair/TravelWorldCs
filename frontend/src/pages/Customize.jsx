import React, { useState, useContext,useRef } from 'react';
import { BASE_URL } from '../utils/config';
import CommonSection from '../shared/commonSection.jsx';
import { authContext } from '../context/authContext';
import '../styles/customize.css';
import customImg from '../assets/images/gallery-05.jpg'

const AddCustomForm = () => {

  const formRef = useRef(null);
  const { user } = useContext(authContext);
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [distance, setDistance] = useState('');
  const [maxGroupSize, setMaxGroupSize] = useState('');
  const [price, setPrice] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = user.email;
    // Calculate distance
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const timeDifference = Math.abs(endDate - startDate);
    setDistance(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)));

    const customData = {
      title,
      city,
      address,
      distance,
      userEmail,
      maxGroupSize,
      price,
      isApproved,
    };

    try {
      const response = await fetch(`${BASE_URL}/custom`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customData),
      });

      if (response.ok) {
        // Display success message
        setSuccessMessage('Custom data added successfully!');
        // Reset form fields
        setTitle('');
        setCity('');
        setAddress('');
        setDistance('');
        setMaxGroupSize('');
        setPrice('');
        setFromDate('');
        setToDate('');
        setIsApproved(false);
        // Clear success message after a timeout
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000); // 5 seconds
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleReset = () => {
    setTitle('');
    setCity('');
    setAddress('');
    setDistance('');
    setMaxGroupSize('');
    setPrice('');
    setFromDate('');
    setToDate('');
    setIsApproved(false);
  };


  return (
    <>
    <div className="custom__page">
      <div className="custom__img">
        <img src={customImg} alt='' />
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1>Add Custom Tour</h1>
          <div className="line"></div>
        </div>
        {successMessage && (
          <p className="message success-message">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="title" className="label">Title:</label>
              <input type="text" id="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} required className="input" />
            </div>
            <div className="form-column">
              <label htmlFor="city" className="label">City:</label>
              <input type="text" id="city" name="city" value={city} onChange={(event) => setCity(event.target.value)} className="input" />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="address" className="label">Address:</label>
            <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} className="input" />
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="fromDate" className="label">From Date:</label>
              <input type="date" id="fromDate" name="fromDate" value={fromDate} onChange={(event) => setFromDate(event.target.value)} required className="input" min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="form-column">
              <label htmlFor="toDate" className="label">To Date:</label>
              <input type="date" id="toDate" name="toDate" value={toDate} onChange={(event) => setToDate(event.target.value)} required className="input" min={new Date().toISOString().split('T')[0]} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="maxGroupSize" className="label">Max Group Size:</label>
              <input type="number" id="maxGroupSize" name="maxGroupSize" value={maxGroupSize} onChange={(event) => setMaxGroupSize(event.target.value)} required className="input" />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="button">Submit</button>
            <button type="reset" className="reset-button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default AddCustomForm;