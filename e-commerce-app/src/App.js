import React from "react";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
 
  return (
    <div className="App">
      <NavBar />
      
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
