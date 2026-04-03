import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWNm0FoI4XVIkUj47C5MHIp1JUuQCqw9k",
  authDomain: "userbyte-de8f5.firebaseapp.com",
  projectId: "userbyte-de8f5",
  storageBucket: "userbyte-de8f5.firebasestorage.app",
  messagingSenderId: "344213866669",
  appId: "1:344213866669:web:010bed36132b2da1575e24",
  measurementId: "G-E9DKNW7ZE0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };