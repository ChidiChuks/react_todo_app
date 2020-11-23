import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCwUCA-cOstjrf22x6BX_CBFMVzp3nqHq4",
    authDomain: "todo-app-firebase-5eb65.firebaseapp.com",
    databaseURL: "https://todo-app-firebase-5eb65.firebaseio.com",
    projectId: "todo-app-firebase-5eb65",
    storageBucket: "todo-app-firebase-5eb65.appspot.com",
    messagingSenderId: "132524955833",
    appId: "1:132524955833:web:5d759fa89c595b83c76368",
    measurementId: "G-PLXQK3ZEEF"
});

const db = firebaseApp.firestore();

export default db;