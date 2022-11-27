// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9DpHGL3ohzEsmS2pysS337x21ZMX0RvE",
  authDomain: "fir-auth-a6334.firebaseapp.com",
  projectId: "fir-auth-a6334",
  storageBucket: "fir-auth-a6334.appspot.com",
  messagingSenderId: "291206947680",
  appId: "1:291206947680:web:997f3c569a00bac2b47405",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
