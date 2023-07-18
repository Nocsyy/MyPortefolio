import { useState, useEffect } from 'react';
import './carroussel.css';

function Carroussel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + props.pictures.length) % props.pictures.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.pictures.length);
  };

  useEffect(() => {
    setCurrentImageIndex(0); // Réinitialise l'index de l'image lorsque les images changent
  }, [props.pictures]);

  return (
    <div className='img_carroussel'>
      {props.pictures.map((pic, i) => (
        <img
          alt=''
          key={i}
          src={`${pic}`}
          style={{
            display: i === currentImageIndex ? 'block' : 'none',
          }}
        ></img>
      ))}
      {props.pictures.length > 1 && (
        <div className='ctn-btn'>
          <button className='btn-next' onClick={previousImage}>
            <span className='material-symbols-outlined icon'>
              arrow_back_ios
            </span>
          </button>
          <button className='btn-previous' onClick={nextImage}>
            <span className='material-symbols-outlined icon'>
              arrow_forward_ios
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Carroussel;
