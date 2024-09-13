// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBSuqyH6oxwctCttnhS-HZCKZI3xWrnuA",
  authDomain: "health-tracker-ede61.firebaseapp.com",
  projectId: "health-tracker-ede61",
  storageBucket: "health-tracker-ede61.appspot.com",
  messagingSenderId: "35098054466",
  appId: "1:35098054466:web:c49cdbbe860b6fd0c042db",
  measurementId: "G-4E1RFR8Z80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);