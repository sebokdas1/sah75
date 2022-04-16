// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhta5327dN6XTv9gnpQDUBjS3WgoEOosk",
    authDomain: "sakib-al-hassan.firebaseapp.com",
    projectId: "sakib-al-hassan",
    storageBucket: "sakib-al-hassan.appspot.com",
    messagingSenderId: "101568810491",
    appId: "1:101568810491:web:5821795427f78176ba8f5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app;
export default auth;