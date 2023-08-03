import './presentation.css';

import Apropos from '../Apropos/apropos';

function Presentation() {
  return (
    <section id='presentation'>
      <div style={{ height: '90vh' }} className='ctn_about'>
        <div className='ctn_text'>
          <div className='ctn_text_name'>
            <h2>Bonjour, je suis Andy Ozdemir</h2>
          </div>
          <div className='text_background'>
            <h4>Developpeur web front-end</h4>
          </div>
          <div>
            <p>
              Développeur web junior, déterminé à résoudre les défis les plus
              stimulants. Toujours en quête d'innovation, prêt à collaborer pour
              créer des solutions numériques exceptionnelles.
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
