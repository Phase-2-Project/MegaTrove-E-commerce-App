<<<<<<< HEAD
import logo from './logo.svg';
import SignUp from './components/Accounts/SignUp'
import './App.css';
=======
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
>>>>>>> c31fcaefd5315d9797a018933dd761599ea00b64

function App() {
  
  return (
<<<<<<< HEAD
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SignUp/>
    </div>
=======
   <div className="App">
      <NavBar />
      <Categories />
      <ItemList />
      <Footer />
   </div>
>>>>>>> c31fcaefd5315d9797a018933dd761599ea00b64
  );
}

export default App;
