import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carroussel from '../components/carroussel/ carroussel';
import { Link } from 'react-router-dom';
import './page_rea.css';

function PageRea() {
  const [realisation, setRealisation] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const handleRedirect = () => {
    // Redirection vers la page d'accueil
    navigate('/MyPortefolio');

    // Effectuer le défilement jusqu'à la section des réalisations après un court délai
    setTimeout(() => {
      const realisationSection = document.getElementById('realisation');
      if (realisationSection) {
        realisationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  useEffect(() => {
    fetch('https://nocsyy.github.io/db/realisation.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRea = data.find((realisation) => realisation.id === id);
        setRealisation(foundRea);
        if (!foundRea) {
          navigate('/erreur-chargement');
        }
      })
      .catch((error) => {
        console.error('Error fetching or parsing JSON data:', error);
        navigate('/erreur-chargement');
      });
  }, [id, navigate]);

  return (
    <section className='page_realisation' style={{ marginTop: '-10vh' }}>
      <div className='ctn_btn_back'>
        <button onClick={handleRedirect} className='btn_back'>
          <i class='fa-solid fa-arrow-left'></i>
        </button>
      </div>
      {realisation && (
        <div className='ctn_rea'>
          <div className='ctn_title_desc'>
            <h3 className='title_page_rea' style={{ fontSize: 'x-large' }}>
              {realisation.title}
            </h3>
            <p>
              <i style={{ fontSize: '12px' }}>{realisation.description}</i>
            </p>
          </div>
          <div className='ctn_techno_img_url'>
            <Carroussel pictures={realisation.img_carroussel} />
            <div className='ctn_techno_url'>
              <div className='div_techno'>
                <h5>Technologies utilisées : </h5>
                <div className='techno'>
                  {realisation.techno.map((tech, index) => (
                    <p key={index}>{tech}</p>
                  ))}
                </div>
              </div>
              <div className='div_url'>
                <h5>GitHub : </h5>
                <a href={realisation.url} className='url'>
                  <i
                    class='fa-brands fa-github'
                    style={{ color: '#000000;' }}
                  ></i>
                </a>
              </div>
              <div className='div_mission'>
                <h5>Mission : </h5>
                <p>
                  <i>{realisation.mission}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PageRea;
