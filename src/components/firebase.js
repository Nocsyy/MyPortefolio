import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAc6JpLsD8lk7HsBmcRZc2Lq2TpVFWzA3k",
    authDomain: "porte-f69a1.firebaseapp.com",
    projectId: "porte-f69a1",
    storageBucket: "porte-f69a1.appspot.com",

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };