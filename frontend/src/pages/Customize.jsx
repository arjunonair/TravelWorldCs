import React, { useState,useContext } from 'react';
import {BASE_URL} from '../utils/config';
import CommonSection from '../shared/commonSection.jsx'
import {authContext} from '../context/authContext'

const AddCustomForm = () => {
  const {user} = useContext(authContext);
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [distance, setDistance] = useState(0);
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = user.email
    console.log(userEmail)
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
        const data = await response.json();
        console.log('Custom data added:', data);
        // Reset form fields
        setTitle('');
        setCity('');
        setAddress('');
        setDistance('');
        setMaxGroupSize('');
        setPrice('');
        setIsApproved(false);
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const formContainerStyle = {
    maxWidth: '500px',
    margin: '10px auto',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '4px',
  };

  const formRowStyle = {
    display: 'flex',
    marginBottom: '15px',
  };

  const labelStyle = {
    marginRight: '10px',
    width: '100px',
  };

  const inputStyle = {
    flex: '1',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return <>
    <CommonSection title={'Customize Your Tour'} />
    <div style={formContainerStyle}>
      <h1>Add Custom TOUR</h1>
      <form onSubmit={handleSubmit}>
        <div style={formRowStyle}>
          <label htmlFor="title" style={labelStyle}>Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} required style={inputStyle} />
        </div>
        <div style={formRowStyle}>
          <label htmlFor="city" style={labelStyle}>City:</label>
          <input type="text" id="city" name="city" value={city} onChange={(event) => setCity(event.target.value)} style={inputStyle} />
        </div>
        <div style={formRowStyle}>
          <label htmlFor="address" style={labelStyle}>Address:</label>
          <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} style={inputStyle} />
        </div>
        <div style={formRowStyle}>
          <label htmlFor="distance" style={labelStyle}>Distance:</label>
          <input type="number" id="distance" name="distance" value={distance} onChange={(event) => setDistance(event.target.value)} required style={inputStyle} />
        </div>
        <div style={formRowStyle}>
          <label htmlFor="maxGroupSize" style={labelStyle}>Max Group Size:</label>
          <input type="number" id="maxGroupSize" name="maxGroupSize" value={maxGroupSize} onChange={(event) => setMaxGroupSize(event.target.value)} required style={inputStyle} />
        </div>
        <div style={formRowStyle}>
          <label htmlFor="price" style={labelStyle}>Price:</label>
          <input type="number" id="price" name="price" value={price} onChange={(event) => setPrice(event.target.value)} style={inputStyle} />
        </div>
        <div style={formRowStyle}>
          <label htmlFor="isApproved" style={{ marginRight: '10px' }}>Is Approved:</label>
          <input type="checkbox" id="isApproved" name="isApproved" checked={isApproved} onChange={(event) => setIsApproved(event.target.checked)} />
          <label htmlFor="isApproved">Approved</label>
        </div>
        <div style={buttonContainerStyle}>
          <button type="submit" style={buttonStyle}>Submit</button>
          <button type="reset" style={buttonStyle}>Reset</button>
        </div>
      </form>
    </div>
  </>
};

export default AddCustomForm;
