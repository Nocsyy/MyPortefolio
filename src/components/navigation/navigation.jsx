import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navigation.css';
import Dark_mode from '../darkMode/darkMode';
function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [barPosition, setBarPosition] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

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
        <div id='ctn-effect-glitch'>
          <ScrollLink
            to='presentation'
            smooth={true}
            duration={1000}
            onSetActive={handleSetActive}
            offset={-10 * window.innerHeight}
          >
            <li
              style={{ textDecoration: 'none' }}
              className={activeSection === 'acceuil' ? 'active' : ''}
              onClick={(e) => handleMenuClick('about', e.target)}
            >
              <h4 className='title_nav'>ANDY OZDEMIR</h4>
              <h4 className='title_nav'>ANDY OZDEMIR</h4>
              <h4 className='title_nav'>ANDY OZDEMIR</h4>
            </li>
          </ScrollLink>
        </div>

        <div className='ctn-list-menu'>
          <div className='navManu'>
            <ul>
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
                  About
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
                  Réalisation
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
                  Contact
                </li>
              </ScrollLink>
            </ul>
            <Dark_mode />
            {/* Menu bar */}
            <div
              className={`menu-bar ${barPosition === 0 ? '' : 'show'}`}
              style={{
                left: `${barPosition}px`,
                width: `${barWidth}px`,
              }}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
