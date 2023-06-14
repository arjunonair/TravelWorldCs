import React, { useState, useEffect } from 'react';
import {BASE_URL} from '../utils/config'
import '../styles/admin.css'

const Admin = () => {
  const [tour, setTour] = useState([]);
  const [tourName, setTourName] = useState('');
  const [cityName, setCityName] = useState('');
  const [addressName, setAddressName] = useState('');
  const [distanceName, setDistanceName] = useState('');
  const [price, setPrice] = useState('');
  const [maxGroupSize, setMaxGroupSize] = useState('');
  const [tourDesc, setTourDesc] = useState('');
  const [featured, setFeatured] = useState('');

  // Function to fetch the list of tours from the backend
  const fetchTours = async () => {
    try {
      const response = await fetch(`${BASE_URL}/tours`);
      const data = await response.json();
      setTour(data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  // Function to handle form submission for adding a tour
  const handleAddTour = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/tours`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        title: tourName,
        city: cityName,
        address:addressName,
        distance: distanceName,
        photo: "/tour-images/tour-img02.jpg",
        desc: tourDesc,
        price: price,
        maxGroupSize: maxGroupSize,
        featured: "true",
        }),
      });

      if (response.ok) {
        const newTour = await response.json();
        setTour([...tour, newTour]);
        setTourName('');
        setCityName('');
        setAddressName('');
        setDistanceName('');
        setTourDesc('');
        setPrice('');
        setMaxGroupSize('');
        setFeatured('');
        // setTourDescription('');
      }
    } catch (error) {
      console.error('Error adding tour:', error);
    }
  };

  // const handleDeleteTour = async (tourId) => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/tours/${tourId}`, {
  //       method: 'DELETE',
  //     });

  //     if (response.ok) {
  //       const updatedTours = tours.filter((tour) => tour.id !== tourId);
  //       setTours(updatedTours);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting tour:', error);
  //   }
  // };

  // const handleUpdateTour = async (tourId, updatedTour) => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/tours/${tourId}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedTour),
  //     });

  //     if (response.ok) {
  //       const updatedTours = tours.map((tour) =>
  //         tour.id === tourId ? updatedTour : tour
  //       );
  //       setTours(updatedTours);
  //     }
  //   } catch (error) {
  //     console.error('Error updating tour:', error);
  //   }
  // };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      <h1>ADMIN ONLY AREA 😎</h1>

      <form onSubmit={handleAddTour}>
        <input
          type="text"
          placeholder="Tour Name"
          value={tourName}
          onChange={(event) => setTourName(event.target.value)}
        />

        <input
        type="text"
        placeholder = "City Name"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        />

        <input
        type="text"
        value={addressName}
        placeholder = "Address"
        onChange={(event) => setAddressName(event.target.value)}
        />

        <input
        type ="number"
        placeholder = "Distance"
        value={distanceName}
        onChange={(event) => setDistanceName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Tour Description"
          value={tourDesc}
          onChange={(event) => setTourDesc(event.target.value)}
        />

        <input
        type="number"
        placeholder='Enter the price'
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        />
        <input
        type="number"
        placeholder="Enter the maxGroupSize"
        value={maxGroupSize}
        onChange ={(event)=> setMaxGroupSize(event.target.value)}
        />
        
        <button type="submit">Add Tour</button>
      </form>

      {/* <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <h3>{tour.name}</h3>
            <p>{tour.description}</p>
            <button onClick={() => handleDeleteTour(tour.id)}>Delete</button>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleUpdateTour(tour.id, {
                  name: event.target.name.value,
                  description: event.target.description.value,
                });
              }}
            >
              <input
                type="text"
                placeholder="Tour Name"
                defaultValue={tour.name}
                name="name"
              />
              <input
                type="text"
                placeholder="Tour Description"
                defaultValue={tour.description}
                name="description"
              />
              <button type="submit">Update</button>
            </form>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Admin;