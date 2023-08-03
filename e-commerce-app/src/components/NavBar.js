import React, { useState } from "react";
import SearchBar from "./SearchBar";
import {Link, Route, Routes} from 'react-router-dom';
import Cart from './Cart';
import "./Nav.css"
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import {BsCart2} from "react-icons/bs"

function NavBar({ cartItems, addToCart, removeFromCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="navbar">
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
      <Link to="/cart">
      <span className="cart-badge">{cartItems.length}</span>
            <BsCart2 className="nav-icon" color="black"/>
            {/* <img
            src="" 
            alt="Cart"
          /> */}
            </Link>
      </div>
      {/* 👇️ react router link */}
      <div>
       {/* Sign Up Button */}
      <Link to="/signup" className="sign-in">
        <button>Sign Up</button>
      </Link>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
      <div>
       {/* Login Button */}
      <Link to="/login" className="log-in">
        <button>Login</button>
      </Link>
    </div>
    <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>    
    </div>
  );
}

export default NavBar;
