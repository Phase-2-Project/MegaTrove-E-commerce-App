import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
};

export default Item;
