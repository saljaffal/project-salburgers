//import firebase module
import firebase from 'firebase/app';

//import 'firebase/database';
import 'firebase/database';


//Initialize firebase
const  firebaseConfig = {
    apiKey: "AIzaSyB5tzrQzY2rzPiUztxzaCJVgoIS_femoCw",
    authDomain: "salburgers-app.firebaseapp.com",
    projectId: "salburgers-app",
    storageBucket: "salburgers-app.appspot.com",
    messagingSenderId: "443462683914",
    appId: "1:443462683914:web:dad95dffa1b6091000bef3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//exporting our configured firebase app
export default firebase;
