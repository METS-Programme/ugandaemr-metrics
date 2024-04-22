import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeComponent from "./home.component";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeComponent />
  </React.StrictMode>
);
