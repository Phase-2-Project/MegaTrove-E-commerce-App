// Cart.js
import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}> {/* Add the 'key' prop to the <li> element */}
              <img src={item.product_full_image} alt={item.product_name} />
              <div>
                <h3>{item.product_name}</h3>
                <p>Price: ${item.unit_price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

