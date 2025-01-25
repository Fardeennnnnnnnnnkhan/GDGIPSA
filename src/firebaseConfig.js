// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2SlSdsZXkzeXWFsidFBf8w-ugHAcQJb4",
  authDomain: "gdg-ipsa.firebaseapp.com",
  projectId: "gdg-ipsa",
  storageBucket: "gdg-ipsa.firebasestorage.app",
  messagingSenderId: "116417878748",
  appId: "1:116417878748:web:944c2ee120948ce9b8f219",
  measurementId: "G-5GF2NMTMVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }; 