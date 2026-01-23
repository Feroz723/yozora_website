import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Set initial theme class on body
if (!document.body.classList.contains('theme-dark') && !document.body.classList.contains('theme-light')) {
  document.body.classList.add('theme-dark');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

