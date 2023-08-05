import React from "react";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom"
import "./Nav.css"
import { BsCart2 } from "react-icons/bs"

function NavBar({ cartItems, removeFromCart, searchTerm, setSearchTerm }) {

  const auth = useAuth()

  const navigate = useNavigate()

  function handleLogout() {
    auth.logout()
    navigate('/')
  }
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
          <BsCart2 className="nav-icon" color="black" />
        </Link>
      </div>
      <div>
        {/* Sign Up Button */}
        {/* <Link to="/signup" className="sign-in">
        <button>Sign Up</button>
      </Link> */}
      </div>
      <div>
        {/* Login Button */}
        {auth.user ? <button onClick={handleLogout}>Logout</button> : <Link to="/login" className="log-in">
          <button>Login</button>
        </Link>}
      </div>
    </div>
  );
}

export default NavBar;
