// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBhKP1bPAYNy_j_APqy8jyo-2BAgN8GV8",
  authDomain: "sprint4-dbdd2.firebaseapp.com",
  projectId: "sprint4-dbdd2",
  storageBucket: "sprint4-dbdd2.appspot.com",
  messagingSenderId: "458196748331",
  appId: "1:458196748331:web:8dc8967d5223542316c26e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)