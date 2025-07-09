import { Link } from "react-router-dom";
//import { useState, useEffect } from 'react';
import './styles/NavBar.css'

function NavBar(){

  return(
  <div className="NavBar">
    <div className="logo">
      <img src={'/assets/cast.jpeg'}></img>
    </div>
    <div className="nav-links">
      <Link to="research" className="nav-link">Research</Link>
      <Link to="news" className="nav-link">News</Link>
      <Link to="people" className="nav-link">People</Link>
      <Link to="about" className="nav-link">About</Link>
    </div>
  </div>
  )
}

export default NavBar;