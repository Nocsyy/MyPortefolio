import './presentation.css';
import logo from './me.png';
import Apropos from '../Apropos/apropos';

function Presentation() {
  return (
    <div style={{ height: '100vh' }} className='ctn_presentation'>
      <div className='ctn_img_presentation'>
        <p style={{ fontSize: 'large' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi
          quidem laudantium dicta? Voluptates explicabo reprehenderit aliquid
          eligendi quae officiis unde! Eaque, sequi! Deserunt ut neque nesciunt
          hic totam molestias.
        </p>
        <div className='div_img_presentation'>
          <img src={logo} />
        </div>
      </div>
      <Apropos />
    </div>
  );
}

export default Presentation;
