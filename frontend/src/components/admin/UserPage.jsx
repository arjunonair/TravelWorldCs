import React, { useState } from "react";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";

const UserPage = () => {
  const { data: users } = useFetch(`${BASE_URL}/users`);
  console.log(users);

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Username</th>
            <th style={headerCellStyle}>Email</th>
            <th style={headerCellStyle}>Phone</th>
            <th style={headerCellStyle}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={cellStyle}>{user.username}</td>
              <td style={cellStyle}>{user.email ? user.email : ''}</td>
              <td style={cellStyle}>{user.phone ? user.phone : ""}</td>
              <td style={cellStyle}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default UserPage;
