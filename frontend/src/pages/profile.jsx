import React, { useContext } from "react";
import "../styles/profile.css";
import { authContext } from "../context/authContext";
import userImg from "../assets/images/user.png";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config";

const ProfilePage = () => {
  const { user } = useContext(authContext);
  const { data: booking } = useFetch(
    `${BASE_URL}/booking/s?userId=${user._id}`
  );
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                <img className="profile_img" src={userImg} alt="" />
                {user ? <h3>{user.username}</h3> : <h3>undefined</h3>}
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong className="pr-1">Email: {user.email}</strong>
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Phone:</strong>4
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Role:</strong>A
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm ">
              <div className="card-header bg-transparent border-0 ">
                <h4 className="mb-0 align-items-center text-center text-capitalize text-decoration-underline">
                  <i className="far fa-clone pr-1"></i>Bookings
                </h4>
              </div>
              {booking?.map((book) => (
                <div className="card-body pt-0 mt-0" key={book._id}>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>TourName</th>
                        <th>BookAt</th>
                        <th>GuestSize</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{book.tourName}</td>
                        <td>{book.bookAt}</td>
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
    </div>
  );
};

export default ProfilePage;
