import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import { Button } from "@arco-design/web-react"
import "@arco-design/web-react/dist/css/arco.css"

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


function ExampleUseState()
{
  const [count, setCount] = useState(0);
   
  return (<Button type="primary" onClick={
    ()=>{
      setCount(count + 1)

  }}>Hello Arco Click {count}</Button>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ExampleUseState />
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
