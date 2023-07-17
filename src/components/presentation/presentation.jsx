import './presentation.css';
import logo from './me.png';
import Apropos from '../Apropos/apropos';

function Presentation() {
  return (
    <body>
      <div style={{ height: '90vh' }} className='ctn_presentation'>
        <div className='ctn_img_presentation'>
          <div className='ctn_text'>
            <h1 style={{ marginBottom: '0' }}>Andy Ozdemir</h1>
            <h3 style={{ marginTop: '0', marginBottom: '0' }}>
              Developpeur front-end
            </h3>
            <p style={{ fontSize: 'large' }}>
              Developpeur depuis 2017, je me suis spécialisé dans le front-end
            </p>
          </div>
          <div className='div_img_presentation'>
            <img src={logo} />
          </div>
        </div>
        <Apropos />
      </div>
    </body>
  );
}

export default Presentation;
