import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Acceuil from './pages/acceuil';
import Service from './components/services/service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Realisation from './components/réalisation/réalisation';
import Formulaire from './components/formulaire/formulaire';


ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/' element={<Service />} />
      <Route exact path='/réalisation' element={<Realisation />} />
      <Route exact path='/contact' element={<Formulaire />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
