import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Acceuil from './pages/acceuil';
import Realisation from './components/réalisation/réalisation';
import Footer from './components/footer/footer';
import PageRea from './pages/page_rea';
import Error from './components/error/error';
import { createRoot } from 'react-dom/client';
import Btn_Up from './components/btnUp/btnUp';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/MyPortefolio' element={<AcceuilWithFooterAndNavigation />} />
        <Route path="/realisation/:id" element={<PageRea />} />
        <Route path="*" element={<ErrorWithFooterAndNavigation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function AcceuilWithFooterAndNavigation() {

  return (
    <div>
      <Navigation />
      <Acceuil />
      <Footer />
    </div>
  );
}

function ErrorWithFooterAndNavigation() {
  return (
    <div>
      <Navigation />
      <Error />
      <Footer />
    </div>
  );
}





