// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbImf1ZRccq8pPjN82gtdndlWB6BUHjIQ",
  authDomain: "expense-tracker-1f064.firebaseapp.com",
  projectId: "expense-tracker-1f064",
  storageBucket: "expense-tracker-1f064.appspot.com",
  messagingSenderId: "409778154253",
  appId: "1:409778154253:web:0825c8e8052aa3ad0a1e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app);

//firebase login
//firebase init
//firebase deploy