import React, { useState } from 'react';
import AdminPage from '../components/admin/AdminPage.jsx';
import CustomPage from '../components/admin/CustomPage.jsx';
import BookedToursTable from '../components/admin/BookedTourTable.jsx';
import { BASE_URL } from "../utils/config";
import useFetch from '../hooks/useFetch.js';

const App = () => {
  const {data:tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  const [currentPage, setCurrentPage] = useState('Tours');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        <h1>Admin Dashboard</h1>
      </div>
      <div style={contentContainerStyle}>
        <div style={menuStyle}>
          <button
            style={menuItemStyle(currentPage === 'Tours')}
            onClick={() => handleMenuClick('Tours')}
          >
            Tours
          </button>
          <button
            style={menuItemStyle(currentPage === 'Create')}
            onClick={() => handleMenuClick('Create')}
          >
            Create
          </button>
          <button
            style={menuItemStyle(currentPage === 'Booking')}
            onClick={() => handleMenuClick('Booking')}
          >
            Booking
          </button>
          <button
            style={menuItemStyle(currentPage === 'Users')}
            onClick={() => handleMenuClick('Users')}
          >
            Users
          </button>
          <button
            style={menuItemStyle(currentPage === 'Custom')}
            onClick={() => handleMenuClick('Custom')}
          >
           Custom
          </button>
        </div>
        <div style={contentStyle}>
          {currentPage === 'Tours' && <BookedToursTable tourCount={tourCount}/>}
          {currentPage === 'Create' && <AdminPage/>}
          {currentPage === 'Booking' && <h1>Booking Page</h1>}
          {currentPage === 'Users' && <h1>Users Page</h1>}
          {currentPage === 'Custom' && <CustomPage />}
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const topSectionStyle = {
  background: '#283945',
  color: '#fff',
  textAlign:'center',
  border:'1px solid #00823C',
  padding: '20px',
};

const contentContainerStyle = {
  display: 'flex',
  flex: '1',
  background: '#fff'
};

const menuStyle = {
  width: '300px',
  background: '#283945',
  padding: '10px',
  borderRadius: '0px'
};

const menuItemStyle = (isActive) => ({
  display: 'block',
  width: '100%',
  padding: '12px 16px',
  border: 'none',
  background: 'none',
  textAlign: 'center',
  borderRadius : '1px',
  cursor: 'pointer',
  outline: 'none',
  color: isActive ? '283945' : '#666',
  fontWeight: isActive ? 'bold' : 'normal',
  transition: 'background-color 0.3s',
  backgroundColor: isActive ? '#f1f1f1' : 'none',
});

const contentStyle = {
  flex: '1',
  padding: '10px'

};

export default App;
