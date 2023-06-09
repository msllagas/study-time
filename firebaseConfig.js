import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase

// Main Project Config
// PS: DO NOT UNCOMMENT
// const firebaseConfig = {

//     apiKey: "AIzaSyBEvpe3cOyfQcoi-694-OWEzDquiQfOm9k",

//     authDomain: "study-time-866b9.firebaseapp.com",

//     projectId: "study-time-866b9",

//     storageBucket: "study-time-866b9.appspot.com",

//     messagingSenderId: "936454543290",

//     appId: "1:936454543290:web:8e99c07e99ed26d1ccef83"

//   };

// For testing purposes
// Changed based on your project config
const firebaseConfig = {
  // Add Here your project's firebase config
  apiKey: "AIzaSyAsM8vG6J_x9s2ANuyviS4FAHDPq7txnvc",

  authDomain: "todo-995c2.firebaseapp.com",

  projectId: "todo-995c2",

  storageBucket: "todo-995c2.appspot.com",

  messagingSenderId: "933148103721",

  appId: "1:933148103721:web:bd3eef8a333e26f3fa3838"

};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
