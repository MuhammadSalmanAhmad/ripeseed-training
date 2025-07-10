// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { ReactNativeAsyncStorage } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcosPk6tuSS_rHmRhQNTKdxtGStU4MjQs",
  authDomain: "miniwallet-c6c86.firebaseapp.com",
  projectId: "miniwallet-c6c86",
  storageBucket: "miniwallet-c6c86.firebasestorage.app",
  messagingSenderId: "790540177526",
  appId: "1:790540177526:web:9fd1ffb7b6fc7224ed4f57",
  measurementId: "G-KHNZGB0RKG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const auth = initializeAuth(app)
const analytics = getAnalytics(app);
