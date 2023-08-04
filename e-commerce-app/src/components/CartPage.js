// CartPage.js
import React from 'react';
import Cart from './Cart';
import './CartPage.css';

function CartPage({ cartItems, removeFromCart }) {
  const calculateTotalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.unit_price;
    });
    return total;
  };

  return (
    <div>
      <h2>Cart Page</h2>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <div>
        <h3>Total Cost: ${calculateTotalCost()}</h3>
      </div>
    </div>
  );
}

export default CartPage;


