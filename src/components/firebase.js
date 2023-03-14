// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzXWmo0NXj8cOmqgTU_57q9jcQSndPLoM",
  authDomain: "venzodatagrid.firebaseapp.com",
  projectId: "venzodatagrid",
  storageBucket: "venzodatagrid.appspot.com",
  messagingSenderId: "388199878985",
  appId: "1:388199878985:web:fa1170c8e0bce61c93ca98",
  measurementId: "G-9BZVHJ6JZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);