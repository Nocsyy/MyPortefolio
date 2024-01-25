import react from 'react';
import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Progress_bar from '../progressBar/progressBar';
import Carousel from '../carouselPhrase/Carousel'
import BoutonTelechargement from '../downloadCv/download';
import './apropos.css';

function Apropos() {
  const { t, i18n } = useTranslation();
  const phrases = [
    t('description.part1') || 'Traduction non trouvée',
    t('description.part2') || 'Traduction non trouvée',
    t('description.part3') || 'Traduction non trouvée',
    t('description.part4') || 'Traduction non trouvée',
    t('description.part5') || 'Traduction non trouvée',
    t('description.part6') || 'Traduction non trouvée',
  ];

  return (
    <section id='about'>

      <div className='section_about'>
        <h2
          style={{
            textAlign: 'center',
            paddingTop: '2vh',
          }}
        >
          {t('description.techno') || 'Traduction non trouvée'}
        </h2>
        <div className='line_about'></div>
        <div className='ctn_techno'>
          <div className='ctn_icon'>
            <div className='ctn_front_end'>
              <h3>Front-end</h3>
              <div>
                <p>React</p>
                <Progress_bar bgcolor='#2ECC71' progress='70' />
              </div>
              <div>
                <p>Angular</p>
                <Progress_bar bgcolor='#2ECC71' progress='30' />
              </div>
              <div>
                <p>Html</p>
                <Progress_bar bgcolor='#2ECC71' progress='90' />
              </div>
              <div>
                <p>Css</p>
                <Progress_bar bgcolor='#2ECC71' progress='90' />
              </div>
            </div>
            <div className='ctn_front_end'>
              <h3>Back-end</h3>
              <div>
                <p>Python</p>
                <Progress_bar bgcolor='#2ECC71' progress='70' />
              </div>
              <div>
                <p>Express</p>
                <Progress_bar bgcolor='#2ECC71' progress='50' />
              </div>
              <div>
                <p>Django</p>
                <Progress_bar bgcolor='#2ECC71' progress='70' />
              </div>
            </div>
            <div className='ctn_front_end'>
              <h3>Cyber sécurité</h3>
              <div>
                <p>OWASP</p>
                <Progress_bar bgcolor='#2ECC71' progress='80' />
              </div>
              <div>
                <p>BurpSuite</p>
                <Progress_bar bgcolor='#2ECC71' progress='50' />
              </div>
            </div>
            <div className='ctn_front_end'>
              <h3>Autre</h3>
              <div>
                <p>Linux</p>
                <Progress_bar bgcolor='#2ECC71' progress='50' />
              </div>
              <div>
                <p>Windows</p>
                <Progress_bar bgcolor='#2ECC71' progress='80' />
              </div>
              <div>
                <p>MacOs</p>
                <Progress_bar bgcolor='#2ECC71' progress='80' />
              </div>

            </div>
          </div>
        </div>


        <div className='ctn_presentation'>
          <h2
            style={{
              textAlign: 'center',
              paddingTop: '2vh',

            }}
          >
            {t('description.me') || 'Traduction non trouvée'}
          </h2>
          <div className='line_about'></div>
          <Carousel phrases={phrases} />
        </div>
        <BoutonTelechargement />
      </div>
    </section >
  );
}

export default Apropos;
