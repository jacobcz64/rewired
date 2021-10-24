import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import DonationHistory from './components/DonationHistory/DonationHistory'

window.localStorage.setItem('recipientId', 1);
window.localStorage.setItem('donorId', 1)

ReactDOM.render(
  <DonationHistory />,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
