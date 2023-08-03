import './apropos.css';
function Apropos() {
  return (
    <section
      id='about'
      style={{
        backgroundColor: ' rgba(232, 232, 232, 0.442)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          paddingTop: '2vh',
        }}
      >
        Un peu plus sur moi
      </h2>
      <div className='section_about'>
        <div className='ctn_presentation'>
          <h3
            style={{
              textAlign: 'center',
              paddingTop: '2vh',
              marginBottom: '5vh',
            }}
          >
            Me connaitre
          </h3>
          <p style={{ paddingRight: '2vw' }}>
            🚀 Développeur Web Junior passionné par l'innovation technologique
            et les solutions numériques !
          </p>
          <p style={{ paddingRight: '2vw' }}>
            🌐💡 Maîtrisant les technologies HTML, CSS, React, Node.js, Express
            et ayant une solide compréhension de Svelte, je suis constamment à
            la recherche de nouveaux défis pour renforcer mes compétences et
            relever des projets ambitieux.
          </p>
          <p style={{ paddingRight: '2vw' }}>
            🛠️ Mon expérience académique et mes projets durant ma formation ont
            façonné mon expertise en développement web, me permettant de
            concevoir des solutions créatives et robustes pour résoudre les
            problèmes les plus complexes.
          </p>
          <p style={{ paddingRight: '2vw' }}>
            🤝 Doté d'un excellent esprit d'équipe, je sais collaborer
            efficacement avec mes collègues pour atteindre des objectifs communs
            et délivrer des résultats exceptionnels.
          </p>
          <p style={{ paddingRight: '2vw' }}>
            📈 Mon désir de perfectionnement me pousse à rester à l'affût des
            dernières tendances technologiques, afin de fournir des produits à
            la pointe de l'industrie.
          </p>
          <p style={{ paddingRight: '2vw' }}>
            💡 Curieux de nature, je suis avide de nouvelles connaissances et je
            suis toujours ouvert à apprendre de nouvelles technologies pour
            enrichir mon savoir-faire.
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
            Technologies maitrisées :{' '}
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
                MangoDB
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
