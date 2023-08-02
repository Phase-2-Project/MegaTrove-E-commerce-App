import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import SignUp from "./Accounts/SignUp";
import { Link } from 'react-router-dom'

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://i.pinimg.com/564x/5b/f9/1f/5bf91f056bbdf16b82f6d01c8045609b.jpg"
          alt=""
        />
      </div>
      {/* SearchBar */}
      <div className="search">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {/* Cart-Icon */}
      <div className="cart-icon">
        <img
          src="https://i.pinimg.com/564x/6e/8c/7d/6e8c7d4659812e628dc6e02919304044.jpg"
          alt=""
        />
      </div>
      <div className="Account">
        <button as={Link} to="./SignUp">Accounts</button>
        {/* <button 
                class="btn btn-primary btn-lg"
                onClick={}
                >
                Account
                </button> */}
        {/* <NavLink
          to="./Accounts/SignUp"
        >
          Accounts
        </NavLink> */}
        
      </div>
    </header>
  );
}

export default NavBar;
