import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch category data from the API or JSON file
    fetch('http://localhost:4001/products')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) {
          // Extract category names from the fetched data and set them in the state
          const categoryNames = data.products.map((product) => product.name);
          setCategories(categoryNames);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

