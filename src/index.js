import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Acceuil from './pages/acceuil';
import Presentation from './components/presentation/presentation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Realisation from './components/réalisation/réalisation';
import Formulaire from './components/formulaire/formulaire';
import Footer from './components/footer/footer';
import MentionLegales from './components/mentions/mentions';


ReactDOM.render(
  <BrowserRouter>
    <Navigation />

    <Routes>
      <Route exact path='/' element={<Acceuil />} />
      <Route exact path='/réalisation' />
      <Route exact path='/contact' />
      <Route exact path='/mention_legale' element={<MentionLegales />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
