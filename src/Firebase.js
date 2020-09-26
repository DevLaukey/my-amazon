import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfoo0GkYM6LPEmJy3rWgb--Z-1VvbQPjQ",
    authDomain: "victor-100.firebaseapp.com",
    databaseURL: "https://victor-100.firebaseio.com",
    projectId: "victor-100",
    storageBucket: "victor-100.appspot.com",
    messagingSenderId: "164616636525",
    appId: "1:164616636525:web:c25e2b977dd4b0670ad764",
    measurementId: "G-W390EKX17T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };