import React, { useState } from 'react';
import './formulaire.css';
import { db } from '../firebase.js';
import { addDoc, collection } from 'firebase/firestore/lite';
import CopyButton from '../copyBoutton/copyButton';

function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(false);

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
    <div className='ctn-form'>
      <h3>Me contacter📲</h3>
      <CopyButton text={'ncs.dev@hotmail.com'} />
      <form>
        <label>Mail :</label>
        <input
          onChange={(event) => {
            setMail(event.target.value);
          }}
          value={mail}
          className='input-email'
          type='text'
          placeholder='john.doe@mail.com'
        ></input>
        <label>Nom :</label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          className='inout-obj'
          type='text'
          placeholder='Name'
        ></input>
        <label>Message :</label>
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
            color: 'rgba(170, 42, 42, 0.585)',
          }}
        >
          🚧 Veuillez remplir tous les champs du formulaire.
        </p>
      )}
      <div className='div_btn_submit'>
        {!isFormSubmitted ? (
          <button
            className='btn_submit'
            onClick={handleSubmit}
            style={{ display: isFormEmpty ? 'none' : 'block' }}
          >
            Envoyer
          </button>
        ) : (
          <div className='checkmark'>
            <span className='checkmark__circle'></span>
            <span className='checkmark__check'></span>
          </div>
        )}

        {isSubmitted && (
          <p style={{ color: 'rgba(42, 170, 42, 0.585)' }}>Demande envoyée !</p>
        )}
      </div>
    </div>
  );
}

export default Form;
