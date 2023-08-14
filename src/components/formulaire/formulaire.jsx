import React, { useState } from 'react';
import './formulaire.css';
import { db } from '../firebase.js';
import { addDoc, collection } from 'firebase/firestore/lite';
import CopyButton from '../copyBoutton/copyButton';
import { useTranslation } from 'react-i18next';

function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const { t } = useTranslation();

  const userCollectionRef = collection(db, 'contactdata');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail.trim() === '' || name.trim() === '' || message.trim() === '') {
      setIsFormEmpty(true);
      setIsFormInvalid(true);
      setTimeout(() => {
        setIsFormEmpty(false);
        setIsFormInvalid(false);
      }, 4000);
      return;
    }

    addDoc(userCollectionRef, {
      mail: mail,
      name: name,
      message: message,
    })
      .then(() => {
        setIsSubmitted(true);
        setIsFormSubmitted(true);
        setTimeout(() => {
          resetForm();
          setIsSubmitted(false);
          setIsFormSubmitted(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du formulaire :", error);
      });
  };

  const resetForm = () => {
    setMail('');
    setName('');
    setMessage('');
  };

  return (
    <section id='contact'>
      <div className='ctn-form' id='ctn-form'>
        <h2>{t('contact.title') || 'Traduction non trouvée'}📲</h2>
        <div className='line_about'></div>
        <CopyButton text={'ncs.dev@hotmail.com'} />
        <form>
          <label>{t('contact.inputMail') || 'Traduction non trouvée'} :</label>
          <input
            onChange={(event) => {
              setMail(event.target.value);
            }}
            value={mail}
            className='input-email'
            type='text'
            placeholder='john.doe@mail.com'
          ></input>
          <label>{t('contact.inputName') || 'Traduction non trouvée'} :</label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            className='inout-obj'
            type='text'
            placeholder='Name'
          ></input>
          <label>
            {t('contact.inputMessage') || 'Traduction non trouvée'} :
          </label>
          <textarea
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            value={message}
            className='input-msg'
            type='text'
            placeholder='Message'
          ></textarea>
        </form>
        {isFormInvalid && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '5vh',
              fontWeight: '500',
              color: 'rgba(212, 17, 17, 0.852)',
            }}
          >
            🚧 {t('contact.errorSubmit') || 'Traduction non trouvée'}
          </p>
        )}
        <div className='div_btn_submit'>
          {!isFormSubmitted ? (
            <button
              className='btn_submit'
              onClick={handleSubmit}
              style={{ display: isFormEmpty ? 'none' : 'block' }}
            >
              {t('contact.submit') || 'Traduction non trouvée'}
            </button>
          ) : (
            <p style={{ color: '#2ECC71', marginTop: '5vh' }}>
              {t('contact.validated') || 'Traduction non trouvée'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Form;
