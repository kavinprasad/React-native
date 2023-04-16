// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDk8nTLhOc_VgA6zCxCtskn6Lm6U-fwD9k",
  authDomain: "fir-crud-ea280.firebaseapp.com",
  databaseURL: "https://fir-crud-ea280-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-crud-ea280",
  storageBucket: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
