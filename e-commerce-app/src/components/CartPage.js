import React from 'react';

function CartPage({ cartItems, removeFromCart }) {
  return (
    <div>
      <h2>Cart Page</h2>
      {/* Implement cart page rendering here, similar to the Cart component */}
      {/* You can reuse the code from the Cart component here */}
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.product_full_image} alt={item.product_name} />
                <div>
                  <h3>{item.product_name}</h3>
                  <p>Price: ${item.unit_price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CartPage;
