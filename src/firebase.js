import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyBABNxOJ2BFios3kRsKSrnw_zCGuU9Q6WE",
    authDomain: "twitter-clone-nahar.firebaseapp.com",
    databaseURL: "https://twitter-clone-nahar-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "twitter-clone-nahar",
    storageBucket: "twitter-clone-nahar.appspot.com",
    messagingSenderId: "784918657949",
    appId: "1:784918657949:web:efdbf70efa778092fd0d74"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;