// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIXjp55aXsMzwgYQdnym-vNaIYTYPYkqo",
    authDomain: "tumejorcolchon-7c742.firebaseapp.com",
    projectId: "tumejorcolchon-7c742",
    storageBucket: "tumejorcolchon-7c742.appspot.com",
    messagingSenderId: "144047567006",
    appId: "1:144047567006:web:fae251dda62981d0cb4b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)