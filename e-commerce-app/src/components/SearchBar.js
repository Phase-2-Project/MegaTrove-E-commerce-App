import React from "react";

const SearchBar = ({searchTerm, setSearchTerm}) => {

    
   // filter items based on search term
//    const filteredItems = items.filter((item) => {
//     item.product_name.toLowerCase().includes(searchTerm.toLowerCase);
//   });

    return (
        <div>
            <input 
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchBar