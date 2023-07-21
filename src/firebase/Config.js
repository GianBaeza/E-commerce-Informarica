
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWrS6Ndva5waS-XhFjgKYSx7O_a4O0IGU",
  authDomain: "gb-app-b1f70.firebaseapp.com",
  projectId: "gb-app-b1f70",
  storageBucket: "gb-app-b1f70.appspot.com",
  messagingSenderId: "1060032128296",
  appId: "1:1060032128296:web:1bec11748ba2ee1be3dc1d",
  measurementId: "G-YLVEN3J5EN"
}


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
