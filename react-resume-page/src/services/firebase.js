// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-6TPvRQpDMNugByWoL9o9jBmhPrO6vgM",
  authDomain: "pma-react-resume.firebaseapp.com",
  databaseURL: "https://pma-react-resume-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pma-react-resume",
  storageBucket: "pma-react-resume.appspot.com",
  messagingSenderId: "248814540663",
  appId: "1:248814540663:web:ddeadf50e06df95e45f372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);