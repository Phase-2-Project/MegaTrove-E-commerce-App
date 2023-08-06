import React, { useEffect, useState } from "react";
import Item from "./Item";

const BASE_URL = "http://ecommerce.muersolutions.com/api/v1";

const ItemList = ({ addToCart, searchTerm, isLoggedIn}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch item data from the API
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((items) => setItems(items))

      .catch((error) => console.error("Error fetching data:", error));
  }, [searchTerm]);

  // Filter items based on the searchTerm
  const filteredItems = items.filter((item) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="item-list" >
      {filteredItems.map((item) => {
            return (
            <div >
          <React.Fragment key={item.id}>
            <Item item={item} addToCart={addToCart} isLoggedIn={isLoggedIn}/>
          </React.Fragment>
          </div>
    )})
                                
   }     
     
    </div>
  );
};

export default ItemList;
