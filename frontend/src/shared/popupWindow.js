import React from "react";

const PopupWindow = ({ onClose, children }) => {
  return (
    <div className="popup-window-overlay">
      <div className="popup-window">
        <button className="close-btn" style={{float: 'right',marginBottom:'20px',backgroundColor:'red'}} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupWindow;
