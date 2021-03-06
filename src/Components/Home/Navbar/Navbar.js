import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="container fixed-top bg-light">
            <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid">
    <Link className="navbar-brand" style={{fontSize:"30px", fontWeight:"700", fontFamily:"arial",}} to="/">TECHEX-PORTAL</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{fontSize:"20px", fontWeight:"600", userSelect:'none', justifyContent:"flex-end"}}>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link" href="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" >Pages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" >Layout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard" >Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;