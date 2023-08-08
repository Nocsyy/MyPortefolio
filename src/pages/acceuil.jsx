import Presentation from '../components/presentation/presentation';
import Navigation from '../components/navigation/navigation';
import Realisation from '../components/réalisation/réalisation';
import Form from '../components/formulaire/formulaire';
import Footer from '../components/footer/footer';
import Apropos from '../components/Apropos/apropos';
import '../index.css';
import Page_rea from './page_rea';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Btn_Up from '../components/btnUp/btnUp';

function Acceuil() {
  const [rea, setRea] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    function handleOrientationChange() {
      if (window.orientation === 90 || window.orientation === -90) {
        // L'orientation est en paysage, forcez le retour en portrait
        if (window.screen.orientation.lock) {
          window.screen.orientation.lock('portrait');
        }
      }
    }

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

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
