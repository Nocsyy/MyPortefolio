import Presentation from '../components/presentation/presentation';
import Realisation from '../components/réalisation/réalisation';
import Form from '../components/formulaire/formulaire';

import Apropos from '../components/Apropos/apropos';
import '../index.css';

import React, { useState, useEffect } from 'react';
import Btn_Up from '../components/btnUp/btnUp';
import Popup from '../components/PopupLang/popup';

function Acceuil() {
  const [rea, setRea] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const updateLanguage = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    fetch('/realisation.json')
      .then((response) => response.json())
      .then((data) => {
        setRea(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <body>
      <Presentation />
      <Apropos />
      <Realisation />
      <Form />
      <Btn_Up />
    </body>
  );
}

export default Acceuil;
