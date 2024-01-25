import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Dark_mode from '../darkMode/darkMode';
import Popup from '../PopupLang/popup';
import './footer.css';
function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className='ctn_about_social'>
        <div className='footer_about'>
          <h3>Andy Ozdemir</h3>
          <p style={{ fontSize: 'small' }}>
            {t('presentation.miniDescription') || 'Traduction non trouvée'}
          </p>
        </div>
        <div className='ctn_social'>
          <h3>Social</h3>
          <div className='ctn_icon_social'>
            <a
              href='https://www.linkedin.com/in/andy-ozdemir-942265273/'
              target='_blank'
              rel='noreferrer'
            >
              <i
                class='fa-brands fa-linkedin'
                style={{ color: 'white', fontSize: 'x-large' }}
              ></i>
            </a>
            <a
              href='https://github.com/Nocsyy'
              target='_blank'
              rel='noreferrer'
            >
              <i
                class='fa-brands fa-github'
                style={{ color: 'white', fontSize: 'x-large' }}
              ></i>
            </a>
          </div>
          <div className='display_none'>
            <Dark_mode />
            <Popup />
          </div>
        </div>
      </div>
      <div className='ctn_line_footer'>
        <div className='line_footer'></div>
      </div>
      <div className='ctn_copyright'>
        <p>
          {' '}
          © 2024 {t('footer.make') || 'Traduction non trouvée'} Andy OZDEMIR
        </p>
      </div>
    </footer>
  );
}

export default Footer;
