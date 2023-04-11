import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({cartitem}) => {
  return (
    <div className="navbar">
        <div className="links">
             <Link to="/"> Shop</Link>
             <Link to="/cart">Cart ({cartitem.length})</Link>
        </div>
    </div>
  )
}

export default Navbar
