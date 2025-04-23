import React from 'react';
import './RightSidebar.css';

const users = [
  {
    name: 'Thomas Edward',
    handle: '@thewallartyou',
    background: 'https://i.imgur.com/lWvE4ks.jpeg',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Chris Doe',
    handle: '@thewallartyou',
    background: 'https://i.imgur.com/b40sUCP.jpeg',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    name: 'Emilie Jones',
    handle: '@thewallartyou',
    background: 'https://i.imgur.com/LsQeXl2.jpeg',
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg'
  },
  {
    name: 'Jessica Williams',
    handle: '@thewallartyou',
    background: 'https://i.imgur.com/j53VSpq.jpeg',
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
  }
];

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <button className="seller-btn">Become a Seller</button>

      <div className="tabs">
        <button className="active">Artists</button>
        <button>Photographers</button>
      </div>

      <div className="user-cards">
        {users.map((user, index) => (
          <div className="user-card" key={index} style={{ backgroundImage: `url(${user.background})` }}>
            <div className="user-details">
              <img src={user.avatar} alt="user" />
              <div>
                <h4>{user.name}</h4>
                <p>{user.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <a href="#">Privacy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Notice</a>
      </footer>
    </div>
  );
};

export default RightSidebar;
