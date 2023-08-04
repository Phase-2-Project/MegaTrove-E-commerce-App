import React, { useState } from "react"; // Import useState from 'react'
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div className="App">
      <NavBar
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <ItemList addToCart={addToCart} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default App;




