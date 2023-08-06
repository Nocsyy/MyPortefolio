import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation';
import Acceuil from './pages/acceuil';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Realisation from './components/réalisation/réalisation';
import Form from './components/formulaire/formulaire';
import Footer from './components/footer/footer';
import PageRea from './pages/page_rea';
import Error from './components/error/error'
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/MyPortefolio' element={<Acceuil />} />
        <Route exact path="/realisation/:id" element={<PageRea />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
