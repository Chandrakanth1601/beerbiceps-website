import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCIjz20dvrxRF9fw8ULJl6QqXP24rdljS0",
  authDomain: "beerbiceps-website.firebaseapp.com",
  projectId: "beerbiceps-website",
  storageBucket: "beerbiceps-website.firebasestorage.app",
  messagingSenderId: "1061411828553",
  appId: "1:1061411828553:web:edaa558aaff181135a6098",
  measurementId: "G-TETS46588C"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
