 import "./formulaire.css"
 import { db } from "../firebase.js";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore/lite";

 function Form (){
    const [mail, setMail] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection (db, "contactdata");
    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            mail : mail,
            name : name,
            message : message
        })
    };

    return(
        <div className="ctn-form">
            <h3>Contact 📲</h3>
            <form>
                <label>Votre e-mail</label>
                <input onChange={(event)=>{
                    setMail(event.target.value)
                }} className="input-email" type="text" placeholder="e-mail"></input>
                <label>Votre nom : </label>
                <input 
                 onChange={(event)=>{
                    setName(event.target.value)
                }}className="inout-obj" type="text" placeholder="Name"></input>
                <label>Votre message :</label>
                <textarea
                 onChange={(event)=>{
                    setMessage(event.target.value)
                }}className="input-msg" type="text" placeholder="Message"></textarea>
                <button onClick={handleSubmit}>Envoyer</button>
            </form>
        </div>
    )
}

export default Form;

