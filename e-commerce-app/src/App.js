import React, { useState } from 'react'; // Import useState from 'react'
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import "./App.css";
import Cart from "./components/Cart"; // Import the Cart component

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
      <NavBar cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
      <ItemList addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;




