// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUecGcKZmZBBUk4qZio9OX4hnSq9CONdA",
  authDomain: "shop-b204b.firebaseapp.com",
  projectId: "shop-b204b",
  storageBucket: "shop-b204b.appspot.com",
  messagingSenderId: "615131435966",
  appId: "1:615131435966:web:b6e2fcda0e573f33329fef"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)