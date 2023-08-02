//import React from "react";
import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4001/products')
      .then((response) => response.json())
      .then((data) => setItems(data)) 
      .then((data) => console.log(data) )


      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
