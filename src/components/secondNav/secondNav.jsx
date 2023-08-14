import react from 'react';
import Dark_mode from '../darkMode/darkMode';
import Popup from '../PopupLang/popup';
import './secondNav.css';
function SecondNav() {
  return (
    <div className='ctn_scnd_nav'>
      <div className='align_item'>
        <Popup />
        <Dark_mode />
      </div>
    </div>
  );
}

export default SecondNav;
