import './presentation.css';

import Apropos from '../Apropos/apropos';
import { useTranslation } from 'react-i18next';

function Presentation() {
  const { t } = useTranslation();
  return (
    <section id='presentation'>
      <div style={{ height: '90vh' }} className='ctn_about'>
        <div className='ctn_text'>
          <div className='ctn_text_name'>
            <h2>
              {t('presentation.me') || 'Traduction non trouvée'} Andy Ozdemir
            </h2>
          </div>
          <div className='text_background'>
            <h4 style={{ color: '#2ECC71' }}>
              {t('presentation.sentence') || 'Traduction non trouvée'}
            </h4>
          </div>
          <div>
            <p>
              {t('presentation.miniDescription') || 'Traduction non trouvée'}
            </p>
          </div>
        </div>
        <div class='middle'>
          <div class='mouse'></div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
