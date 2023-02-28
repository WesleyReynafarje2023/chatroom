// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlqXV_ire3e_CNrkXkVR5nHPC7T6wOw2c",
  authDomain: "chatroom-f2531.firebaseapp.com",
  databaseURL: "https://chatroom-f2531-default-rtdb.firebaseio.com",
  projectId: "chatroom-f2531",
  storageBucket: "chatroom-f2531.appspot.com",
  messagingSenderId: "1931948130",
  appId: "1:1931948130:web:8f60729f948bed6a8d613b",
  measurementId: "G-05KFKR77LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;