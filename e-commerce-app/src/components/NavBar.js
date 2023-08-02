import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Nav.css"
import { BsCart2 } from "react-icons/bs"

function NavBar() {
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
        <a href="#">
            <BsCart2 className="nav-icon" color="black"/>
        </a>
      </div>
      {/* Sign Up Button */}
      <div className="sign-in">
        <button>Sign Up</button>
      </div>
      {/* Login Button */}
      <div className="log-in">
        <button>Login</button>
      </div>
    </div>
  );
}

export default NavBar;
