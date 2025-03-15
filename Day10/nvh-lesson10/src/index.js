import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NvhApp from './NvhApp';
import reportWebVitals from './reportWebVitals';

const nvhRoot = ReactDOM.createRoot(document.getElementById('nvhRoot'));
nvhRoot.render(
  <React.StrictMode>
    <NvhApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
