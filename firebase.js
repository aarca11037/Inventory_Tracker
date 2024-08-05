// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsA79kaIZqUodpnbhDr-WwBPdOGpROyU8",
  authDomain: "inventory-management-876fb.firebaseapp.com",
  projectId: "inventory-management-876fb",
  storageBucket: "inventory-management-876fb.appspot.com",
  messagingSenderId: "745796152300",
  appId: "1:745796152300:web:5262a311b8ffa7244ceec9",
  measurementId: "G-TH8J98ST5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app)

export {firestore}