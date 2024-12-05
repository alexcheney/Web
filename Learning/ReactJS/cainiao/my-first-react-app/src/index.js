import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
  "2 lb salmon",
  "3 blost lemons"
]

var elementlst = items.map((item) => {
  return React.createElement("li", {}, item)
})

const numbers = [1,2,3,4,5]
const res = numbers.reduce((acc, curr) => {
  return acc + curr
})

console.log(res)

console.log(elementlst)

var element = React.createElement(
  "ul",
  {className:"ingredients"},
  elementlst
);

root.render(element, document.getElementById('root'))

// root.render(
//   <React.StrictMode>
//     <App />  
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
