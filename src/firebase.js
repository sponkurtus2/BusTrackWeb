// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAX18dqhGcXP3fHw-xVmjxWjhI8UlF9ObU",
  authDomain: "bustrackweb.firebaseapp.com",
  projectId: "bustrackweb",
  storageBucket: "bustrackweb.appspot.com",
  messagingSenderId: "797156759167",
  appId: "1:797156759167:web:27141f00c588a342d4d14a",
  measurementId: "G-Q054Z5YR9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
