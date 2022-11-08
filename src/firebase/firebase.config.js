// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbyfghqg-544L5zylr4aWhb6IzJJoEiF4",
    authDomain: "lock-pc-9bc4c.firebaseapp.com",
    projectId: "lock-pc-9bc4c",
    storageBucket: "lock-pc-9bc4c.appspot.com",
    messagingSenderId: "438592400090",
    appId: "1:438592400090:web:d364ad6aeecbdc031453e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app