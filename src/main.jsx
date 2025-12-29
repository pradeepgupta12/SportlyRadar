import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ← Yeh zaroori hai!
import App from './App';
import './index.css';  // ya jo bhi global CSS ho

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>          {/* ← Pura app ko wrap kar do */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);