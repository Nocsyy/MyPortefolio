import React, { useEffect, useState } from 'react';

const Carousel = ({ phrases }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Augmente l'index actuel et revient à 0 si on atteint la fin
            setCurrentPhraseIndex((prevIndex) =>
                prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // 10000 milliseconds = 10 seconds

        // Nettoie l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
    }, [currentPhraseIndex, phrases.length]);

    return (
        <div className='ctn_presentation'>
            <p>
                {phrases[currentPhraseIndex] || 'Traduction non trouvée'}
            </p>
        </div>
    );
};

export default Carousel;