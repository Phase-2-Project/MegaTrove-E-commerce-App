import React, { useState } from 'react'; // Import useState from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <NavBar cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<ItemList addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
