import React from 'react';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import ItemList from './components/ItemList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;


