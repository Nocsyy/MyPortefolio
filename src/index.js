import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageRea from './pages/page_rea';
import { createRoot } from 'react-dom/client';
import { AcceuilWithFooterAndNavigation, ErrorWithFooterAndNavigation } from './functionNavigate';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

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






