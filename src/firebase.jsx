import {getAuth} from "firebase/auth"
import { initializeApp } from "@firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqOVx7Utz8cZGmejF3SdVR5TeVfItW0So",
  authDomain: "clone-17656.firebaseapp.com",
  databaseURL: "https://clone-17656-default-rtdb.firebaseio.com",
  projectId: "clone-17656",
  storageBucket: "clone-17656.appspot.com",
  messagingSenderId: "84284079776",
  appId: "1:84284079776:web:3445ad854b53e5d04093c5",
  measurementId: "G-48Y4F07JL6"
};


export   const app= initializeApp(firebaseConfig);
export  const auth =getAuth();
export const db = getDatabase(app);
