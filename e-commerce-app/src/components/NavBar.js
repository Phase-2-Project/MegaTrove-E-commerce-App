import React, {useState} from "react";
import {link, useRoutes} from "react-router-dom"
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import SignUp from "./Accounts/SignUp";


function NavBar (){
    const [ searchTerm, setSearchTerm ] = useState("")

    return(
        <header className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src="" alt=""/>
            </div>
            {/* SearchBar */}
            <div className="search-bar">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            {/* Cart-Icon */}
            <div className="cart-icon">
                <Cart />
            </div>
            <div className="Account">
                <link to= "SignUp">Sign Up</link>
                <link to="LogIn">Login</link>np
                <Routes>
                    <Route path="/Accounts/SignUp" component={SignUp}/><Route/>
                </Routes>
            </div>
        </header>
    )
}

export default NavBar