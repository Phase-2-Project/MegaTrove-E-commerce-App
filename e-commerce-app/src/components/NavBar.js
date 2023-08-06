import React from "react";
import SearchBar from "./SearchBar";
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import "./Nav.css"
import { BsCart2 } from "react-icons/bs"

function NavBar({ cartItems,  removeFromCart, searchTerm, setSearchTerm }) {

  return (
    <div className="navbar">
      {/* Logo & Store Name*/}
      <div className="logo">
        <img
          src="https://i.pinimg.com/564x/5b/f9/1f/5bf91f056bbdf16b82f6d01c8045609b.jpg"
          alt=""
        />
         
      </div>
      <div className="store-name">MegaTrove</div>
      {/* SearchBar */}
      <div className="search">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {/* Cart-Icon */}
      <div className="cart-icon">
      <Link to="/cart">
      <span className="cart-badge">{cartItems.length}</span>
            <BsCart2 className="nav-icon" color="black"/>
            </Link>
      </div>
      <div>
       {/* Sign Up Button */}
      <Link to="/signup" className="sign-in">
        <button>Sign Up</button>
      </Link>

      {/* <Routes>
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes> */}
    </div>
      <div>
       {/* Login Button */}
      <Link to="/login" className="log-in">
        <button>Login</button>
      </Link>
    </div>   
    </div>
  );
}

export default NavBar;









