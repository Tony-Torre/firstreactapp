import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstWithClass from './myObject/FirstWithClass';
import First from './myObject/FirstJS';
import { MyMenu } from './myObject/MyRoute';
import { Summon, Sottrazione } from './myObject/Operation';
import GetData from './myObject/GetData';
import Tsvc from './myObject/TestService';
import UseService from './myObject/UseService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <First />
    <FirstWithClass /> */}
    <MyMenu />
    {/* <Summon numero = {{n1: 5, n2: 4}}/>
    <Sottrazione numero ={{n1 : 10, n2: 3}}/>
    <GetData />
    <UseService TService= {Tsvc}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
