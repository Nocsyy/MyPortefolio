import './contact.css';
function Contact () {

    return (
        <div>
            <h3>Contacte</h3>
            <div className="ctn-form">
                <label>adresse-mail</label>
                <input></input>
                <label>Objet</label>
                <input></input>
                <label>Votre message</label>
                <textarea></textarea>
                <button>Envoyer</button>
            </div>
        </div>
    )
}

export default Contact;

