import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav className='nav'>
        <div id='ctn-effect-glitch'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h4 className='title_nav'>ANDY OZDEMIR +_+</h4>
            <h4 className='title_nav'>ANDY OZDEMIR +_+</h4>
            <h4 className='title_nav'>ANDY OZDEMIR +_+</h4>
          </Link>
        </div>
        <div className='ctn-list-menu'>
          <ul>
            <a href='#realisation'>
              <li>Réalisation</li>
            </a>

            <a href='#ctn-form'>
              <li className='bar'>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
