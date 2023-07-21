import './apropos.css';
function Apropos() {
  return (
    <div
      className='ctn_techno'
      style={{
        backgroundColor: ' rgba(232, 232, 232, 0.442)',
        height: '33vh',
        marginTop: '7vh',
        paddingLeft: '5vw',
        paddingRight: '5vw',
      }}
    >
      <h3 style={{ textAlign: 'center', paddingTop: '2vh' }}>
        Technologies maitrisées:{' '}
      </h3>
      <div className='ctn_icon'>
        <i
          class='fa-brands fa-html5'
          style={{ color: '#c81919', fontSize: '5rem' }}
        ></i>
        <i
          class='fa-brands fa-css3'
          style={{ color: '#005eff', fontSize: '5rem' }}
        ></i>
        <i
          class='fa-brands fa-react'
          style={{ color: '#38e8ff', fontSize: '5rem' }}
        ></i>
        <i
          class='fa-brands fa-js'
          style={{ color: '#ffdd00', fontSize: '5rem' }}
        ></i>
        <h5 style={{ color: 'green', margin: '5px', fontSize: '2rem' }}>
          MangoDB
        </h5>
        <h5 style={{ color: 'grey', margin: '5px', fontSize: '2rem' }}>
          Express
        </h5>
        <i
          class='fa-brands fa-node-js'
          style={{ color: '#00994a', fontSize: '5rem' }}
        ></i>
      </div>
    </div>
  );
}

export default Apropos;
