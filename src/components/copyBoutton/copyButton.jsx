import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import './copyButton.css';
const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000); // Affiche le message pendant 2 secondes
      })
      .catch((error) => {
        console.error('Erreur lors de la copie du texte :', error);
      });
  };

  return (
    <div
      className='div_copyButton'
      style={{
        height: '5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3vh',
        marginBottom: '3vh',
      }}
    >
      {!isCopied ? (
        <p>ncs.dev@hotmail.com</p>
      ) : (
        <span
          style={{
            color: ' rgba(42, 170, 42, 0.585)',
            fontFamily: 'Montserrat',
            fontWeight: '500',
          }}
        >
          Copié dans le presse papier
        </span>
      )}
      <button
        onClick={handleCopyClick}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          border: 'none',
          width: '10vh',
          height: '5vh',
          color: 'rgba(50, 50, 50, 0.635)',
        }}
      >
        <i class='fa-solid fa-copy' style={{ fontSize: 'large' }}></i>
      </button>
    </div>
  );
};

export default CopyButton;
