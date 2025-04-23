import React from 'react';
import './Sidebar.css'; // we'll create this for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        LOGO
      </div>

      <ul className="sidebar-menu">
        <li className="active">Home</li>
        <li>Notifications</li>
        <li>Shop</li>
        <li>Conversation</li>
        <li>Wallet</li>
        <li>Subscription</li>
        <li>My Profile</li>
        <li>Settings</li>
      </ul>

      <div className="sidebar-bottom">
        <button className="logout-btn">Log out</button>
        <p className="footer-text">
          2022©logo name <br />
          Developed by Ivan Infotech
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
