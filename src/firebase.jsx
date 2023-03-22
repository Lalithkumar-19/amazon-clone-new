import {getAuth} from "firebase/auth"
import { initializeApp } from "@firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzoUUyELbdTXq3bPgSTDuybcn4JO2UcgQ",
  authDomain: "valid-broker-282602.firebaseapp.com",
  projectId: "valid-broker-282602",
  storageBucket: "valid-broker-282602.appspot.com",
  messagingSenderId: "228870729228",
  appId: "1:228870729228:web:0b6601b0f6d47c64f80829"
};


export   const app= initializeApp(firebaseConfig);
export  const auth =getAuth();
export const db = getDatabase(app);
