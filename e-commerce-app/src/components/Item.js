import React from 'react';

function Item({ item, addToCart }) {
  const handleAddToCart = () => {
    addToCart(item);
  };
  
  return (
    <div className="item">
      
      {item.product_full_image && <img src={item.product_full_image} alt={item.product_name} />}
      <h3>{item.product_name}</h3>
      <p>Price: ${item.unit_price}</p>
      
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Item;


