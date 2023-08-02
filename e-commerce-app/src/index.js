import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { AuthProvider } from 'react-auth-kit';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/Accounts/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    > */}
      {/* <BrowserRouter> */}
        <App />
        {/* <Routes> */}
          {/* <Route path="/Accounts" element={<SignUp />} /> */}
        {/* </Routes> */}
     {/* </BrowserRouter> */}
    {/* </AuthProvider> */}
  </React.StrictMode>
);


