import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navigation.css';

function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  return (
    <header>
      <nav className='nav'>
        <div id='ctn-effect-glitch'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h4 className='title_nav'>ANDY OZDEMIR</h4>
            <h4 className='title_nav'>ANDY OZDEMIR</h4>
            <h4 className='title_nav'>ANDY OZDEMIR</h4>
          </Link>
        </div>

        <div className='ctn-list-menu'>
          <ul>
            <ScrollLink
              to='about'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li className={activeSection === 'about' ? 'active' : ''}>
                About
              </li>
            </ScrollLink>
            <ScrollLink
              to='realisation'
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              <li className={activeSection === 'realisation' ? 'active' : ''}>
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
              >
                Contact
              </li>
            </ScrollLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
