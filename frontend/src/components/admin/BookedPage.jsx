import React, { useState } from "react";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";
import UpdatePage from "./UpdatePage";

const BookedPage = () => {
  // const [page, setPage] = useState(0);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState({
    _id: "",
    title: "",
    days: "",
    price: "",
    bookAt: "",
    maxGroupSize: "",
  });
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);
  const { data: booking } = useFetch(`${BASE_URL}/booking`);
  console.log(booking);

  const handleUpdateClick = (Booking) => {
    setSelectedBooking(Booking);
    setShowUpdateModal(true);
  };

  const handleDeleteClick = (Booking) => {
    setBookingToDelete(Booking);
    setShowDeleteConfirmationModal(true);
  };

  const handleConfirmDelete = () => {
    console.log(bookingToDelete._id)
    fetch(`${BASE_URL}/booking/${bookingToDelete._id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log('Booking deleted successfully');
          window.location.reload();
        } else {
          console.error('Failed to delete Booking');
        }
      })
      .catch((error) => {
        console.error("Failed to delete Booking:", error);
      });
    setShowDeleteConfirmationModal(false);
  };

  const handleCancelDelete = () => {
    setBookingToDelete(null);
    setShowDeleteConfirmationModal(false);
  };

  const handleModalClose = () => {
    setShowUpdateModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Full Name</th>
            <th style={headerCellStyle}>Phone</th>
            <th style={headerCellStyle}>Booking Name</th>
            <th style={headerCellStyle}>Booked For</th>
            <th style={headerCellStyle}>Group Size</th>
            <th style={headerCellStyle}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((Booking, index) => (
            <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={cellStyle}>{Booking.fullName}</td>
              <td style={cellStyle}>{Booking.phone}</td>
              <td style={cellStyle}>{Booking.tourName}</td>
              <td style={cellStyle}>{new Date(Booking.bookAt).toLocaleDateString()}</td>
              <td style={cellStyle}>{Booking.guestSize}</td>
              <td style={cellStyle}>
                <button
                  style={deleteButtonStyle}
                  onClick={() => handleDeleteClick(Booking)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div style={paginationStyle}>
        {[...Array(pageCount).keys()].map((number) => (
          <span
            key={number}
            onClick={() => setPage(number)}
            style={pageNumberStyle(page === number)}
          >
            {number + 1}
          </span>
        ))}
      </div> */}

      {showUpdateModal && (
        <div style={modalContainerStyle} onClick={handleUpdateClick}>
          <div style={modalContentStyle}>
            <UpdatePage BookingId={selectedBooking._id} />
          </div>
        </div>
      )}

      {showDeleteConfirmationModal && (
        <div style={modalContainerStyle} onClick={handleModalClick}>
          <div style={modalContentStyle}>
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this Booking?</p>
            <div style={modalButtonContainerStyle}>
              <button style={confirmButtonStyle} onClick={handleConfirmDelete}>
                Yes, Delete
              </button>
              <button style={cancelButtonStyle} onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const tableContainerStyle = {
  width: "100%",
  overflowX: "auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const headerCellStyle = {
  padding: "12px 16px",
  textAlign: "left",
  backgroundColor: "#ced4da",
  color: "#283945",
  fontWeight: "bold",
};

const cellStyle = {
  padding: "12px 16px",
  textAlign: "left",
};

const rowEvenStyle = {
  backgroundColor: "#f8f8f8",
};

const rowOddStyle = {
  backgroundColor: "#ffffff",
};

// const paginationStyle = {
//   marginTop: "20px",
//   display: "flex",
//   justifyContent: "center",
// };

// const pageNumberStyle = (isActive) => ({
//   display: "inline-block",
//   margin: "0 5px",
//   padding: "8px 12px",
//   border: "1px solid #ccc",
//   backgroundColor: isActive ? "#283945" : "#f1f1f1",
//   color: isActive ? "#fff" : "#000",
//   cursor: "pointer",
//   borderRadius: "4px",
//   transition: "background-color 0.3s",
//   fontWeight: isActive ? "bold" : "normal",
// });

// const updateButtonStyle = {
//   backgroundColor: "green",
//   color: "#fff",
//   border: "none",
//   padding: "8px 12px",
//   margin: "0 5px",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

const deleteButtonStyle = {
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  margin: "0 5px",
  borderRadius: "4px",
  cursor: "pointer",
};

const modalContainerStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "4px",
};

const modalButtonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const confirmButtonStyle = {
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  margin: "0 5px",
  borderRadius: "4px",
  cursor: "pointer",
};

const cancelButtonStyle = {
  backgroundColor: "grey",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  margin: "0 5px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default BookedPage;