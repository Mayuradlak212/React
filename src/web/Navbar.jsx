import React from "react";
import "./web.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-bar">
    
      <div>
        <nav className="nav-items">
          <li>
         
          <Link to="/" >Home</Link>

          </li>
          <li>
            {/* <a href="/contact">Contact </a> */}
           
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/service">Services</Link>

           
            {/* <Link to="/service">Services</Link> */}
          </li>
          <li>
          <Link to="/login">Login</Link>

           
            {/* <Link to="/login">Login</Link> */}
          </li>
          <li>
          <Link to="/profile">Profile</Link>

           
            {/* <Link to="/profile">Profile</Link> */}
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
