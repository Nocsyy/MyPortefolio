import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './realisation.css';
import Carroussel from '../carroussel/ carroussel';
import Collapse from '../collapse/collapse';
import Navigation from '../navigation/navigation';
import { useTranslation } from 'react-i18next';

function Realisation(props) {
  const [rea, setRea] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { t } = useTranslation();

  const handleLinkClick = (button) => {
    window.scrollTo(0, 0); // Faites défiler la page vers le haut lors du clic sur le lien
  };

  useEffect(() => {
    fetch('https://nocsyy.github.io/db/realisation.json')
      .then((response) => response.json())
      .then((data) => {
        setRea(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleItemHover = (rea) => {
    setHoveredItem(rea);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section id='realisation'>
      <h2
        style={{
          textAlign: 'center',
          fontFamily: 'lato',
        }}
      >
        {t('realisation.title') || 'traduction non trouvée'}
      </h2>
      <div className='line_rea'></div>
      <div className='ctn-data'>
        {rea.map((rea, index) => (
          <div
            className={`data ${
              hoveredItem && hoveredItem.id === rea.id ? 'hovered' : ''
            }`}
            key={rea.id}
            onMouseEnter={() => handleItemHover(rea)}
            onMouseLeave={() => handleItemLeave()}
          >
            <div>
              <Link
                className='lien_data'
                to={'/realisation/' + rea.id}
                onClick={handleLinkClick}
              >
                <img src={`${rea.img}`} alt={rea.title} />
              </Link>
              {hoveredItem && hoveredItem.id === rea.id && (
                <div>
                  <h2 className='title_rea'>{rea.title}</h2>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Realisation;
