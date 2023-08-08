import React, { useState } from 'react';
import './darkMode.css';

function Dark_mode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const setDark = () => {
    // 2
    localStorage.setItem('theme', 'dark');

    // 3
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  // 4
  const storedTheme = localStorage.getItem('theme');

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  // 5
  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className='ctn_btn_dark'>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <input
          type='checkbox'
          className='btn_dark_mode'
          id='switch'
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <label for='switch' className={darkMode ? '☀️' : '🌑'}></label>
      </div>
    </div>
  );
}

export default Dark_mode;
