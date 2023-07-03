import React from 'react';
import "./Navbar.css";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { LoginApp } from '../Mylogin/Login';




function Navbar() {
  return (
    <div className='navbar'>
    <div className='navContainer'>
      <span className='homeLogo'> <FaHospitalAlt/>
      <samp className='logo'>SM Multispecialist Hospital</samp></span>
      <div className='login'>
      <div className='navItem'>
      <Link to="/login" className='navButton'>Register</Link>
      <Link to="/login" className='navButton'>Login</Link>
      </div>
      </div>
    </div>
    
    </div>
  )
}

export default Navbar;