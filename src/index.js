import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Acceuil from './pages/acceuil';
import Presentation from './components/presentation/presentation';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Realisation from './components/réalisation/réalisation';
import Form from './components/formulaire/formulaire';
import Footer from './components/footer/footer';
import MentionLegales from './components/mentions/mentions';
import Politiqueconfidentialite from './components/mentions/politiqueconfidentialite';


ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/' element={<Acceuil />} />
      <Route exact path='/mention_legale' element={<MentionLegales />} />
      <Route exact path='/politique_de_confidentialite' element={<Politiqueconfidentialite />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
