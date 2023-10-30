// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtYmr6w74V6EI4IdfDK-4706tmJh7NQ8",
  authDomain: "bookstore-7b3f2.firebaseapp.com",
  databaseURL: "https://bookstore-7b3f2-default-rtdb.firebaseio.com",
  projectId: "bookstore-7b3f2",
  storageBucket: "bookstore-7b3f2.appspot.com",
  messagingSenderId: "727763460980",
  appId: "1:727763460980:web:40d144ac7f460d8baec221"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);