
import React, { useEffect, useState } from 'react';
import Item from './Item';

const BASE_URL = 'http://ecommerce.muersolutions.com/api/v1';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch item data from the API
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((items) => setItems(items))

      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="item-list">
      {items.map((item) => (
        <React.Fragment key= {item.id}>
        <Item  item={item} />
        </React.Fragment>
        
      ))}
    </div>
  );
};

export default ItemList;





