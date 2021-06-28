import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6aAu7NSn-FSbk7GtWG6fu3kOd1OA6HhQ",
    authDomain: "final-projek-wepro.firebaseapp.com",
    databaseURL: "https://final-projek-wepro-default-rtdb.firebaseio.com",
    projectId: "final-projek-wepro",
    storageBucket: "final-projek-wepro.appspot.com",
    messagingSenderId: "956813315316",
    appId: "1:956813315316:web:fc37f19c1d3c4c4ec162a1",
    measurementId: "G-GK2RDDD903"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;