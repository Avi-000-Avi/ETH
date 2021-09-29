import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <MoralisProvider appId="4S12Z6OWMk2IkfGcKr712xLVTldKoSt2jM2PXM0T" serverUrl="https://jatfccjcovh3.moralishost.com:2053/server">
    <Router>
    <App />
    </Router>
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
