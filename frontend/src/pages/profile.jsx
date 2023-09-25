import React, { useState, useContext } from "react";
import "../styles/profile.css";
import { authContext } from "../context/authContext";
// import userImg from "../assets/images/user.png";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config";
import PopupWindow from "../shared/popupWindow";

const ProfilePage = () => {
  const { user } = useContext(authContext);
  const { data: booking } = useFetch(
    `${BASE_URL}/booking/s?userId=${user._id}`
  );
  const { data: userData } = useFetch(`${BASE_URL}/users`);

  const userDetail = userData.find(item => item._id === user._id);

  const [showPopup, setShowPopup] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPhone, setNewPhone] = useState("");
  // const [file, setFile] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [image, setImage] = useState("")

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function convertToBase64(e){
      console.log(e);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload= () => {
        console.log(reader.result);
        setImage(reader.result)
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const updatedData = {};
  
      if (newUsername) {
        updatedData.username = newUsername;
      }
      if (newPhone) {
        updatedData.phone = newPhone;
      }
      if (image) {
        updatedData.photo = image;
      }
  
      if (Object.keys(updatedData).length === 0) {
        alert("Please provide at least one update.");
        return;
      }
  
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (res.ok) {
        setSuccessMessage("User information updated successfully!");
        setNewUsername("");
        setNewPhone("");
        setImage("");
      } else {
        alert("Error updating...");
      }
    } catch (err) {
      console.error("Error updating...");
    }
  };
  
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm profile-card">
            <div className="settings-icon" onClick={togglePopup}>
                <i class="ri-list-settings-fill"></i>
            </div>

              <div className="card-header bg-transparent text-center">
                {userDetail && <img className="profile_img" src={userDetail.photo} alt="" />} 
                {user ? <h3>{user.username}</h3> : <h3>undefined</h3>}
              </div>  
              {userDetail && (
                <div className="card-body" key={userDetail._id}>
                  <p className="mb-0">
                    <strong className="pr-1">Email: {user.email}</strong>
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Phone: {userDetail.phone || "Not Given"}</strong>
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Role: {userDetail.role}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>  
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h4 className="mb-0 align-items-center text-center text-capitalize text-decoration-underline">
                  <i className="far fa-clone pr-1"></i>Bookings
                </h4>
              </div>
              {booking?.map((book) => (
                <div className="card-body pt-0 mt-0" key={book._id}>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>TourName</th>
                        <th>Booked For</th>
                        <th>GuestSize</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{book.tourName}</td>
                        <td>{new Date(book.bookAt).toLocaleDateString()}</td>
                        <td>{book.guestSize}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
  <PopupWindow onClose={togglePopup}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="newUsername">New Username:</label>
      <input
        type="text"
        id="newUsername"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />

      <label htmlFor="newPhone">New Phone:</label>
      <input
        type="text"
        id="newPhone"
        value={newPhone}
        onChange={(e) => setNewPhone(e.target.value)}
      />

      <label htmlFor="file">Upload the image : </label><p>size less 500kb</p>
      <input
        accept='image/*'
        type="file"
        id="file"
        onChange={convertToBase64}
      />
      <h5>Current Picture :</h5>{image === "" || image==null? "" :  <img src={image} width={100} height={70} alt=""/>}
      <button type="submit">Update</button>
    </form>
    {successMessage && <p className="success-message">{successMessage}</p>}
  </PopupWindow>
)}

    </div>
  );
};

export default ProfilePage;