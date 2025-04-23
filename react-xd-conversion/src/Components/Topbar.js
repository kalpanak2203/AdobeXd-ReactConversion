import React from 'react';
import './Topbar.css';
import { FiSettings } from 'react-icons/fi'; // for filter icon

const Topbar = () => {
  return (
    <div className="topbar">
      <input
        type="text"
        className="search-input"
        placeholder="Search here..."
      />
      <button className="filter-btn">
        <FiSettings size={18} />
        Filters
      </button>
      <button className="seller-btn">Become a Seller</button>
    </div>
  );
};

export default Topbar;
