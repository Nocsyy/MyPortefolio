import React, { useState, useEffect } from 'react';
import './btnUp.css';

function Btn_Up() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const innerWidth = window.innerWidth;

    if (scrollY > 600 && innerWidth < 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`btnUpContainer ${isVisible ? 'visible' : ''}`}>
      <button className='btnUp' onClick={handleClickUp}>
        <i className='fa-solid fa-arrow-up'></i>
      </button>
    </div>
  );
}

export default Btn_Up;
