import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAf2t3hWrmTzFjQF3sr5161g_oxeu3amW0",
    authDomain: "gulahmad-clone.firebaseapp.com",
    projectId: "gulahmad-clone",
    storageBucket: "gulahmad-clone.appspot.com",
    messagingSenderId: "1073044887463",
    appId: "1:1073044887463:web:604bf022e719d043fc4882",
    measurementId: "G-89HGE602RW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const db = firebase.firestore()