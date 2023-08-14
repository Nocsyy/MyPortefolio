import react from 'react';
import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './apropos.css';

function Apropos() {
  const { t, i18n } = useTranslation();

  return (
    <section id='about'>
      <h2
        style={{
          textAlign: 'center',
          paddingTop: '2vh',
        }}
      >
        {t('description.me') || 'Traduction non trouvée'}
      </h2>
      <div className='line_about'></div>
      <div className='section_about'>
        <div className='ctn_presentation'>
          <h3
            style={{
              textAlign: 'center',
              paddingTop: '2vh',
              marginBottom: '5vh',
            }}
          >
            {t('description.knowMe') || 'Traduction non trouvée'}
          </h3>
          <p style={{ paddingRight: '2vw' }}>
            {t('description.part1') || 'Traduction non trouvée'}
          </p>
          <p style={{ paddingRight: '2vw' }}>
            {t('description.part2') || 'Traduction non trouvée'}
          </p>
          <p style={{ paddingRight: '2vw' }}>
            {t('description.part3') || 'Traduction non trouvée'}
          </p>
          <p style={{ paddingRight: '2vw' }}>
            {t('description.part4') || 'Traduction non trouvée'}
          </p>
          <p style={{ paddingRight: '2vw' }}>
            {t('description.part5') || 'Traduction non trouvée'}
          </p>
          <p style={{ paddingRight: '2vw' }}>
            {t('description.part6') || 'Traduction non trouvée'}
          </p>
        </div>
        <div className='ctn_line'>
          <div className='line'></div>
        </div>
        <div className='ctn_techno'>
          <h3
            style={{
              textAlign: 'center',
              paddingTop: '2vh',
              marginBottom: '5vh',
            }}
          >
            {t('description.techno') || 'Traduction non trouvée'}
          </h3>
          <div className='ctn_icon'>
            <div>
              <i
                class='fa-brands fa-html5'
                style={{ color: '#c81919', fontSize: '5rem' }}
              ></i>
            </div>
            <div>
              <i
                class='fa-brands fa-css3'
                style={{ color: '#005eff', fontSize: '5rem' }}
              ></i>
            </div>
            <div>
              <i
                class='fa-brands fa-react'
                style={{ color: '#38e8ff', fontSize: '5rem' }}
              ></i>
            </div>
            <div>
              <i
                class='fa-brands fa-js'
                style={{ color: '#ffdd00', fontSize: '5rem' }}
              ></i>
            </div>
            <div>
              <h5 style={{ color: 'green', margin: '5px', fontSize: '2rem' }}>
                Mango
              </h5>
            </div>
            <div>
              <h5 style={{ color: 'grey', margin: '5px', fontSize: '2rem' }}>
                Express
              </h5>
            </div>
            <div>
              <i
                class='fa-brands fa-node-js'
                style={{ color: '#00994a', fontSize: '5rem' }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
