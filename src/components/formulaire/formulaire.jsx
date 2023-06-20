 import "./formulaire.css"
 function Form (){

    return(
        <div className="ctn-form">
            <h3>Contact</h3>
            <form>
                <label>Votre e-mail</label>
                <input className="input-email" type="text"></input>
                <label>Objet :</label>
                <input className="inout-obj" type="text"></input>
                <label>Votre message :</label>
                <input className="input-msg" type="text"></input>
                <button>Envoyer</button>
            </form>
        </div>
    )
}

export default Form;

