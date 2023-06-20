import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Acceuil from './pages/acceuil';
import Service from './components/services/service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Realisation from './components/réalisation/réalisation';


ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/' element={<Service />} />
      <Route exact path='/réalisation' element={<Realisation />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
