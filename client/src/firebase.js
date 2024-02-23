// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bdda5.firebaseapp.com",
  projectId: "mern-blog-bdda5",
  storageBucket: "mern-blog-bdda5.appspot.com",
  messagingSenderId: "772924261200",
  appId: "1:772924261200:web:3d8d2ba4ab6a8ff573a255"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

