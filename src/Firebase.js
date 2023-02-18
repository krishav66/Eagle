
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfYRhrdXXyOwfAvEf1Ei0YAKj6MMqrsR8",
    authDomain: "eagle-bff63.firebaseapp.com",
    databaseURL: "https://eagle-bff63-default-rtdb.firebaseio.com",
    projectId: "eagle-bff63",
    storageBucket: "eagle-bff63.appspot.com",
    messagingSenderId: "622334600370",
    appId: "1:622334600370:web:86f25679ebeb43502e15ab",
    measurementId: "G-L6KGZNY77K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


