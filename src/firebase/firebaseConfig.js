// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdqCmp_Sc6U_OZS_OudbJsZeGjYRVXpOs",
  authDomain: "phone-verify-74003.firebaseapp.com",
  projectId: "phone-verify-74003",
  storageBucket: "phone-verify-74003.firebasestorage.app",
  messagingSenderId: "30342590136",
  appId: "1:30342590136:web:598703557c9a27cbd74e4d",
  measurementId: "G-3VWD86S5QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export { auth, RecaptchaVerifier, signInWithPhoneNumber };