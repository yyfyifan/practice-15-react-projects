import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './01.birthdaylist/App';
// import App from './02.tours/App';
// import App from './03.reviews/App';
import App from './04.accordion/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
