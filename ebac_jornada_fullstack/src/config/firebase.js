// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAogo3rbry_uk7A8kJDOobMewoSycdRxYc",
  authDomain: "jornada-fullstack---ebac.firebaseapp.com",
  projectId: "jornada-fullstack---ebac",
  storageBucket: "jornada-fullstack---ebac.appspot.com",
  messagingSenderId: "387147866508",
  appId: "1:387147866508:web:4ac924cfa3011b3fbbb6a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;