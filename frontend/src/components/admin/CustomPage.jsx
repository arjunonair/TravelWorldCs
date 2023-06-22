/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/config';
import useFetch from '../../hooks/useFetch';

const CustomPage = () => {
  const [customs, setCustoms] = useState([]);
  const [Price, setPrice] = useState('');
  const [isApproved, setIsApproved] = useState('');
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

  console.log(customs);

  const updateHandler = async (e, id) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/custom/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: Price,
          isApproved: isApproved,
        }),
      });
      if (res.ok) {
        console.log(res);
        setShowSuccessMessage(true);
        fetchData(); // Fetch updated custom data after successful update
      } else {
        throw new Error('Failed to update tour');
      }
    } catch (error) {
      console.error('Error updating tour:', error);
    }
  };
  
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
  };

  const setSelect = {
    width: '100px',
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
                <select style={setSelect} onChange={(e) => setIsApproved(e.target.value)}>
                  <option value="">-- Select --</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
              <td style={cellStyle}>
                <button type="submit" onClick={(e) => updateHandler(e, custom._id)} style={buttonStyle}>
                  Update
                </button>
              </td>
              <td style={cellStyle}>
                <button type="submit" style={buttonStyle}>
                  Send
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomPage;