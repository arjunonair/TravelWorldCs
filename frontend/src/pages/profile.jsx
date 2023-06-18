import React, {useContext} from 'react';
import '../styles/profile.css';
import { authContext } from "../context/authContext";
import userImg from '../assets/images/user.png'

const ProfilePage = () => {
  const {user} = useContext(authContext)

  return(
  <div className="student-profile py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent text-center">
            <img className="profile_img" src={userImg} alt=''/>
            {
              user? <h3>{user.username}</h3> : <h3>undefined</h3>
            }
          </div>
          <div className="card-body">
            <p className="mb-0"><strong className="pr-1">Email: </strong>{user.email}</p>
            <p className="mb-0"><strong className="pr-1">Phone:</strong>4</p>
            <p className="mb-0"><strong className="pr-1">Role:</strong>A</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Bookings</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="30%"></th>
                <td width="2%">:</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default ProfilePage;