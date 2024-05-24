// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFZLGwfPIrrW-X6_w524jrfkQhvSC76-I",
  authDomain: "ins-clone-11ef4.firebaseapp.com",
  projectId: "ins-clone-11ef4",
  storageBucket: "ins-clone-11ef4.appspot.com",
  messagingSenderId: "40751404708",
  appId: "1:40751404708:web:08aa7acf224f332b1db831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
