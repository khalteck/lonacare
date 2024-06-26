import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCgZz7s8VhCMPKXy1xAf-MHPhF69laxILQ",
  authDomain: "lonacare-48c0f.firebaseapp.com",
  projectId: "lonacare-48c0f",
  storageBucket: "lonacare-48c0f.appspot.com",
  messagingSenderId: "442168215933",
  appId: "1:442168215933:web:eb12f6a2f4b968f2cb6414",
  measurementId: "G-KMP9Y0CGWG",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
