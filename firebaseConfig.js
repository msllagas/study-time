import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEvpe3cOyfQcoi-694-OWEzDquiQfOm9k",

    authDomain: "study-time-866b9.firebaseapp.com",
  
    projectId: "study-time-866b9",
  
    storageBucket: "study-time-866b9.appspot.com",
  
    messagingSenderId: "936454543290",
  
    appId: "1:936454543290:web:7416ffe0999fec07ccef83"
  
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
