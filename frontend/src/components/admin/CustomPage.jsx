/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/config';
import useFetch from '../../hooks/useFetch';
import { htmlCode } from './template';
import { htmlNoCode } from './templateno';

const CustomPage = () => {
  
  const [customs, setCustoms] = useState([]);
  const [Price, setPrice] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { data: custom, loading, error, fetchData } = useFetch(`${BASE_URL}/custom`);

  useEffect(() => {
    fetchData()
  });

  useEffect(() => {
    if (custom) {
      setCustoms(custom);
    }
  }, [custom, loading, error]);

  const updateHandler = async (e, id, mail) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/custom/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: Price,
        }),
      });
      if (res.ok) {
        setShowSuccessMessage(true);
        fetchData();   
        const emailRes = await fetch(`${BASE_URL}/email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: mail,
            subject: 'Tour Booking Confirmation',
            html: htmlCode
          }),
        });
        if (emailRes.ok) {
          console.log('Email sent successfully!');
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        throw new Error('Failed to update tour');
      } 
    } catch (error) {
      console.error('Error updating tour:', error);
    }
  };

  const deleteHandler = async(e,id,mail) =>{
    console.log(id)
    e.preventDefault()
    await fetch(`http://localhost:4000/api/v1/custom/${id}`, {
      method: 'DELETE',
    }).then((response) => {
        if (response.ok) {
          console.log('Tour deleted successfully');
          fetchData();
          const emailRes = fetch(`${BASE_URL}/email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: mail,
              subject: 'Tour Booking Confirmation',
              html: htmlCode
            }),
          });
          if (emailRes.ok) {
            console.log('Email sent successfully!');
          } else {
            throw new Error('Failed to send email');
          }
        } else {
          console.error('Failed to delete tour');
        }
      })
      .catch((error) => {
        console.error("Failed to delete tour:", error);
      });
  }

  const successMessageStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '12px',
    borderRadius: '4px',
    marginTop: '16px',
    opacity: showSuccessMessage ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const headerCellStyle = {
    backgroundColor: 'lightgray',
    padding: '8px',
    textAlign: 'left',
  };

  const rowEvenStyle = {
    backgroundColor: '#f2f2f2',
  };

  const rowOddStyle = {
    backgroundColor: 'white',
  };

  const cellStyle = {
    padding: '8px',
  };

  const inputStyle = {
    width: '100px',
    padding: '3px',
    borderRadius: '5px'
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      {showSuccessMessage && <p style={successMessageStyle}>Tour updated successfully!</p>}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Title</th>
            <th style={headerCellStyle}>City</th>
            <th style={headerCellStyle}>Address</th>
            <th style={headerCellStyle}>Distance</th>
            <th style={headerCellStyle}>Max Group Size</th>
            <th style={headerCellStyle}>Price</th>
            <th style={headerCellStyle}>Is Approved</th>
            <th style={headerCellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {customs.map((custom, index) => (
            <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={cellStyle}>{custom.title}</td>
              <td style={cellStyle}>{custom.city}</td>
              <td style={cellStyle}>{custom.address}</td>
              <td style={cellStyle}>{custom.distance}</td>
              <td style={cellStyle}>{custom.maxGroupSize}</td>
              <td style={cellStyle}>
                <input
                  placeholder="Price"
                  style={inputStyle}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
              <td style={cellStyle}>
                <button type="submit" onClick={(e) => deleteHandler(e, custom._id,custom.userEmail)} style={buttonStyle}>
                  Reject
                </button>
              </td>
              <td style={cellStyle}>
                <button type="submit" onClick={(e) => updateHandler(e, custom._id,custom.userEmail)} style={buttonStyle}>
                  Approve
                </button>
              </td>
              {/* <td style={cellStyle}>
                <button type="submit" style={buttonStyle}>
                  Send
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomPage;