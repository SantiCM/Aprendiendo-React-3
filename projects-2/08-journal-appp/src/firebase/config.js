// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
import { getEnvironments } from "../helpers/getEnvironments";
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { 

VITE__APIKEY, 

VITE__AUTHDOMAIN, 

VITE__PROJECTID,

VITE__STORAGEBUCKET,

VITE__MESSAGINGSENDERID,

VITE__APPID ,

} = getEnvironments() 

// Your web app's Firebase configuration
// dev/ prod
/*const firebaseConfig = {
  apiKey: "AIzaSyAUanQhro-_65AsOEalBZ_ZV9Nma2Tdbgo",
  authDomain: "react-cursos-b1792.firebaseapp.com",
  projectId: "react-cursos-b1792",
  storageBucket: "react-cursos-b1792.appspot.com",
  messagingSenderId: "559653972947",
  appId: "1:559653972947:web:e8cd34a3c0400b1c29dd26"
};*/

// test
/*const firebaseConfig = {
  apiKey: "AIzaSyAZEieLHGrPMZ-v8giww0Wt92EWUXog350",
  authDomain: "produccion-para-journal-app.firebaseapp.com",
  projectId: "produccion-para-journal-app",
  storageBucket: "produccion-para-journal-app.appspot.com",
  messagingSenderId: "756310179561",
  appId: "1:756310179561:web:a38ae9ac04efc2aad9ba78"
};*/

const firebaseConfig = {

  apiKey: VITE__APIKEY,
  
  authDomain: VITE__AUTHDOMAIN, 
  
  projectId: VITE__PROJECTID,
  
  storageBucket: VITE__STORAGEBUCKET,
  
  messagingSenderId: VITE__MESSAGINGSENDERID,
  
  appId: VITE__APPID ,

};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);

export const FireBaseAuht = getAuth(FireBaseApp);

export const FireBaseDB   = getFirestore(FireBaseApp);

// Esto es el firebase para hacer todo lo que necesitamos
// NOTA: Esto es diferente por cada uso, recordatorio: Usar diferente cada aplicacion