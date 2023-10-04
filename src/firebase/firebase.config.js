// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBywTH4pqMqy5mXOzDHI2eT3qP0FOXkyt8",
  authDomain: "auth-react-web.firebaseapp.com",
  projectId: "auth-react-web",
  storageBucket: "auth-react-web.appspot.com",
  messagingSenderId: "705404973301",
  appId: "1:705404973301:web:b8e1d7fc8ccbe0a644d5bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;