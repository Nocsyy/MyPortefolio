import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navigation.css';
import Dark_mode from '../darkMode/darkMode';
import Popup from '../PopupLang/popup';
import { useTranslation } from 'react-i18next';
function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [barPosition, setBarPosition] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const { t } = useTranslation();

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleMenuClick = (button, element) => {
    if (button === activeSection) {
      setBarPosition(0);
      setBarWidth(0);
    } else {
      const elementWidth = element.getBoundingClientRect().width;
      setBarPosition(element.offsetLeft);
      setBarWidth(elementWidth);
    }
  };

  return (
    <header>
      <nav className='nav'>
        <div className='ctn-list-menu'>
          <ul>
            <ScrollLink
              to='presentation'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleMenuClick('about', e.target)}
              >
                {t('nav.li0') || 'Traduction non trouvée'}
              </li>
            </ScrollLink>
            <ScrollLink
              to='about'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleMenuClick('about', e.target)}
              >
                {t('nav.li1') || 'Traduction non trouvée'}
              </li>
            </ScrollLink>
            <ScrollLink
              to='realisation'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li
                className={activeSection === 'realisation' ? 'active' : ''}
                onClick={(e) => handleMenuClick('realisation', e.target)}
              >
                {t('nav.li2') || 'Traduction non trouvée'}
              </li>
            </ScrollLink>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li
                className={activeSection === 'contact' ? 'active bar' : 'bar'}
                onClick={(e) => handleMenuClick('contact', e.target)}
              >
                {t('nav.li3') || 'Traduction non trouvée'}
              </li>
            </ScrollLink>
          </ul>

          {/* Menu bar */}
          <div
            className={`menu-bar ${barPosition === 0 ? '' : 'show'}`}
            style={{
              left: `${barPosition}px`,
              width: `${barWidth}px`,
            }}
          />
        </div>
        <div className='nav_right'>
          <Dark_mode />
          <Popup />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
