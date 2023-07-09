import React, { useState } from 'react';

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
      style={{
        width: '25vw',
        height: '5vh',
        border: '1px solid',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <p>ncs.dev@hotmail.com</p>
      <button
        onClick={handleCopyClick}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0)', border: 'none' }}
      >
        <i class='fa-solid fa-copy'></i>
      </button>
      {isCopied && <span>Texte copié avec succès !</span>}
    </div>
  );
};

export default CopyButton;
