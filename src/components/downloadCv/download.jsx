import React from 'react';
import './download.css'

const BoutonTelechargement = () => {
    const handleTelechargement = () => {
        // Les données du fichier que vous souhaitez télécharger
        const lienPDF = process.env.PUBLIC_URL + '/asset/CV_Andy_Ozdemir.pdf';


        const a = document.createElement('a');
        a.href = lienPDF;
        a.download = 'CV_Andy_OZDEMIR.pdf';

        // Ajouter le lien au document
        document.body.appendChild(a);

        // Simuler un clic sur le lien pour déclencher le téléchargement
        a.click();

        // Retirer le lien du document
        document.body.removeChild(a);


    };

    return (
        <button onClick={handleTelechargement} className="btn_dl">
            Télécharger mon CV
        </button>
    );
};

export default BoutonTelechargement;