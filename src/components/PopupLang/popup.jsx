import React, { useState, useEffect } from 'react';
import i18n from '../../i18n';
import './Popup.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' },
    de: { nativeName: 'Deutsch' },
    tr: { nativeName: 'Türkçe' },
    cn: { nativeName: '中国' },
  };
  useEffect(() => {
    setSelectedLanguage(i18n.language); // Mettre à jour la langue sélectionnée avec la langue actuelle
  }, []);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setIsLanguageSelected(false); // Réinitialiser la validation lorsque la langue change
    i18n.changeLanguage(event.target.value); // Changer la langue ici pour traduire correctement
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng}>
              {lngs[lng].nativeName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Popup;
