// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCesOjrSQZytbh_SXVGgm19aH54qyx9Ybk",
  authDomain: "sale-and-rent-app.firebaseapp.com",
  projectId: "sale-and-rent-app",
  storageBucket: "sale-and-rent-app.firebasestorage.app",
  messagingSenderId: "245035253678",
  appId: "1:245035253678:web:986ec1614cd05c082b923f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export { db };