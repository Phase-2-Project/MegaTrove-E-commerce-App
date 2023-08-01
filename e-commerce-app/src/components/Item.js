import React from 'react';

const Item = ({ item, onAddToCart }) => {
  const { id, name, price, description } = item;

  return (
    <div className="item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default Item;
