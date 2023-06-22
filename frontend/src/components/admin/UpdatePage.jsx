/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/config";
import useFetch from '../../hooks/useFetch'

const UpdatePage = ({ tourId }) => {
  const [tour, setTour] = useState(null);
  const [tourName, setTourName] = useState('');
  const [cityName, setCityName] = useState('');
  const [addressName, setAddressName] = useState('');
  const [distanceName, setDistanceName] = useState('');
  const [price, setPrice] = useState('');
  const [maxGroupSize, setMaxGroupSize] = useState('');
  const [tourDesc, setTourDesc] = useState('');
  const [featured, setFeatured] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchTourDetails();
  }, []);

  const fetchTourDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}/tours/${tourId}`);
      const data = await response.json();
      setTour(data);
      setTourName(data.title);
      setCityName(data.city);
      setAddressName(data.address);
      setDistanceName(data.distance);
      setPrice(data.price);
      setMaxGroupSize(data.maxGroupSize);
      setTourDesc(data.desc);
      setFeatured(data.featured);
      console.log(data);
    } catch (error) {
      console.error("Error fetching tour details:", error);
    }
    
  };
  const {data:tours} = useFetch(`${BASE_URL}/tours/${tourId}`)

  const handleUpdateTour = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/tours/${tourId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: tourName,
          city: cityName,
          address: addressName,
          distance: distanceName,
          photo: "/tour-images/tour-img02.jpg",
          desc: tourDesc,
          price: price,
          maxGroupSize: maxGroupSize,
          featured: featured,
        }),
      });
  
      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        throw new Error("Failed to update tour");
      }
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2 style={headingStyle}>Update Tour</h2>
      <div style={cardStyle}>
        <div style={cardBodyStyle}>
          {tour ? (
            <>
              <h5 style={cardTitleStyle}>{tours.title}</h5>
              <form onSubmit={handleUpdateTour} style={formStyle}>
                <div style={formRowStyle}>
                  <div style={formFieldStyle}>
                    <label htmlFor="tourName" style={labelStyle}>Tour Name:</label>
                    <input
                      type="text"
                      id="tourName"
                      value={tourName}
                      onChange={(e) => setTourName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div style={formFieldStyle}>
                    <label htmlFor="cityName" style={labelStyle}>City:</label>
                    <input
                      type="text"
                      id="cityName"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={formRowStyle}>
                  <div style={formFieldStyle}>
                    <label htmlFor="addressName" style={labelStyle}>Address:</label>
                    <input
                      type="text"
                      id="addressName"
                      value={addressName}
                      onChange={(e) => setAddressName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div style={formFieldStyle}>
                    <label htmlFor="distanceName" style={labelStyle}>Distance:</label>
                    <input
                      type="number"
                      id="distanceName"
                      value={distanceName}
                      onChange={(e) => setDistanceName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={formRowStyle}>
                  <div style={formFieldStyle}>
                    <label htmlFor="price" style={labelStyle}>Price:</label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div style={formFieldStyle}>
                    <label htmlFor="maxGroupSize" style={labelStyle}>Max Group Size:</label>
                    <input
                      type="number"
                      id="maxGroupSize"
                      value={maxGroupSize}
                      onChange={(e) => setMaxGroupSize(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={formRowStyle}>
                  <label htmlFor="tourDesc" style={labelStyle}>Tour Description:</label>
                  <textarea
                    id="tourDesc"
                    value={tourDesc}
                    onChange={(e) => setTourDesc(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div style={formRowStyle}>
                  <label htmlFor="featured" style={labelStyle}>Featured:</label>
                  <select
                    id="featured"
                    value={featured}
                    onChange={(e) => setFeatured(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">-- Select --</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div style={formRowStyle}>
                  <button type="submit" style={buttonStyle}>
                    Update Tour
                  </button>
                </div>
              </form>
              {showSuccessMessage && (
                <div style={successMessageStyle}>
                  Tour updated successfully!
                </div>
              )}
            </>
          ) : (
            <div>Loading tour details...</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Inline styles
const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const cardStyle = {
  background: '#f8f9fa',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  borderRadius: '5px',
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
};

const cardBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const cardTitleStyle = {
  marginBottom: '20px',
  textAlign: 'center',
  color: '#333',
  fontWeight:'500'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '15px',
};

const formFieldStyle = {
  flex: '1',
  marginRight: '10px',
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ced4da',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '10px 20px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: 'auto',
};

const successMessageStyle = {
  marginTop: '0px',
  background: '#28a745',
  color: '#fff',
  padding: '10px',
  borderRadius: '4px',
  textAlign: 'center',
};

export default UpdatePage;
