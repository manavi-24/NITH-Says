// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "nith-says.firebaseapp.com",
  projectId: "nith-says",
  storageBucket: "nith-says.appspot.com",
  messagingSenderId: "975395402350",
  appId: "1:975395402350:web:42aba178148e31942bec7f",
  measurementId: "G-65X8NP60PB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
