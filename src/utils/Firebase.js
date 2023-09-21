// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCIMzlnwYc0PoMdl0ANMCEBvDHhbzKtfmQ",
  authDomain: "hng-task-3-e0f38.firebaseapp.com",
  projectId: "hng-task-3-e0f38",
  storageBucket: "hng-task-3-e0f38.appspot.com",
  messagingSenderId: "439764986040",
  appId: "1:439764986040:web:8480ed8b1884dfbb4aac4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
