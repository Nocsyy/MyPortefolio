import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './realisation.css';
import Carroussel from '../carroussel/ carroussel';
import Collapse from '../collapse/collapse';

function Realisation(props) {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    fetch('https://nocsyy.github.io/db/realisation.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    const handleBodyScroll = () => {
      // Disable body scroll when the modal is open
      document.body.style.overflow = selectedItem ? 'hidden' : 'auto';
    };
    handleBodyScroll(); // Call once to set the initial state
    window.addEventListener('scroll', handleBodyScroll);
    return () => {
      window.removeEventListener('scroll', handleBodyScroll);
    };
  }, [selectedItem]);
  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id='realisation'>
      <h3
        style={{
          color: 'black',
          textAlign: 'center',
          fontFamily: 'lato',
          fontSize: 'x-large',
        }}
      >
        Mes réalisations :{' '}
      </h3>
      <div className='ctn-data'>
        {data.map((item) => (
          <div
            className={`data ${
              hoveredItem && hoveredItem.id === item.id ? 'hovered' : ''
            }`}
            key={item.id}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => handleItemHover(item)}
            onMouseLeave={() => handleItemLeave()}
          >
            <div>
              <img src={`${item.img}`} alt={item.title} />

              {hoveredItem && hoveredItem.id === item.id && (
                <div>
                  <h2 className='title_rea'>{item.title}</h2>
                </div>
              )}
            </div>
          </div>
        ))}
        {selectedItem && (
          <div className='modal' onClick={handleCloseModal}>
            <div className='modal-content'>
              <span className='close' onClick={handleCloseModal}>
                &times;
              </span>
              <div className='div_row'>
                <h2 className='title_rea_modal'>{selectedItem.title}</h2>
                <Carroussel pictures={selectedItem.img_carroussel} />
              </div>
              <div className='div_next'>
                <div className='div_mission'>
                  <h5>Mission : </h5>
                  <p>{selectedItem.mission}</p>
                </div>
                <div className='div_techno'>
                  <h5>Technologies utilisées : </h5>
                  <div className='techno'>
                    {selectedItem.techno.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </div>
                </div>
                <div className='div_url'>
                  <h5>GitHub : </h5>
                  <a href={selectedItem.url} className='url'>
                    <i
                      class='fa-brands fa-github'
                      style={{ color: '#000000;' }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Realisation;
