import React from 'react';
import './Navbar.css'; // Correct path for Navbar.css in components folder

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Horg</div>
    <ul className="nav-links">
      <li><button className="nav-btn">About Us</button></li>
      <li><button className="nav-btn">Our Art</button></li>
      <li><button className="nav-btn">Our history</button></li>
    </ul>
    <div className="profile">
      <img src="./Img_resources/Profile.jpg" alt="Profile" className="profile-img" />
    </div>
  </nav>
);

export default Navbar;
