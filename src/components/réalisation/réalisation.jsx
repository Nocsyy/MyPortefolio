import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './realisation.css';
import Carroussel from '../carroussel/ carroussel';

function Realisation(props) {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    fetch('/realisation.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
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
            <img src={`/asset/${item.img}`} alt={item.title} />
            <h2 className='title_rea'>{item.title}</h2>
            {hoveredItem && hoveredItem.id === item.id && (
              <div>
                <div className='description'>{item.description}</div>
                <div className='langage'>{item.langage}</div>
              </div>
            )}
          </div>
        </div>
      ))}
      {selectedItem && (
        <div className='modal'>
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
            <div className='div_go_site'>
              <a href={selectedItem.url_site}>
                <p>voir site ➡️</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Realisation;
