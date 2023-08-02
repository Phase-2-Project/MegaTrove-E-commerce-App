import React, { useState } from "react";

function Item({ item, onAddToCart }){
    const [showDescription, setShowDescription] = useState(false);

  const { id, name, price, description } = item;

  const handleAddToCart = () => {
    onAddToCart(item);
  };

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };
    return(
        <div className="item">
             <h2>{name}</h2>
      <p>Price: ${price}</p>
      {showDescription && <p>{description}</p>}
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleShowDescription}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>

        </div>
    )
}
export default Item