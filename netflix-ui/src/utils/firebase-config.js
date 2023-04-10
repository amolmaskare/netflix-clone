import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKg-udpNHpkmbulsMd8aHiXxl5kUGeuhc",
  authDomain: "react-netflix-clone-d2480.firebaseapp.com",
  projectId: "react-netflix-clone-d2480",
  storageBucket: "react-netflix-clone-d2480.appspot.com",
  messagingSenderId: "386372006125",
  appId: "1:386372006125:web:742d0be7f0c21827c35ce4",
  measurementId: "G-2KDZS3S6VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);