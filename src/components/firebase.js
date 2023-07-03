import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAc6JpLsD8lk7HsBmcRZc2Lq2TpVFWzA3k",
    authDomain: "porte-f69a1.firebaseapp.com",
    projectId: "porte-f69a1",
    storageBucket: "porte-f69a1.appspot.com",
    messagingSenderId: "883032355546",
    appId: "1:883032355546:web:cb6fa682beecac9bcfabe3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };