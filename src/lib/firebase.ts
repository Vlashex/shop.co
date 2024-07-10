// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCponMBtBr3nttsJ75qZHhiJFhXBD139P0",
  authDomain: "shopco-68498.firebaseapp.com",
  projectId: "shopco-68498",
  storageBucket: "shopco-68498.appspot.com",
  messagingSenderId: "305769836039",
  appId: "1:305769836039:web:22c5bbac26955ac61884a2",
  measurementId: "G-EWSVM7FPZ5"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);