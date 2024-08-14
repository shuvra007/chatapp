import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyA2s7nhIwZPSvD9Ij6y6Ud45HjtaNPqiRI",

  authDomain: "react-firebase-da836.firebaseapp.com",

  databaseURL: "https://react-firebase-da836-default-rtdb.firebaseio.com",

  projectId: "react-firebase-da836",

  storageBucket: "react-firebase-da836.appspot.com",

  messagingSenderId: "84241215534",

  appId: "1:84241215534:web:5b1161f71b59c42c60afbf"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()