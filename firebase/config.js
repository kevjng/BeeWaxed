import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVk4vzDtaYmq_V8H_6SSh3yTs68NNp_DE",
    authDomain: "beewaxed-583de.firebaseapp.com",
    projectId: "beewaxed-583de",
    storageBucket: "beewaxed-583de.appspot.com",
    messagingSenderId: "504557511909",
    appId: "1:504557511909:web:c72d256ecd57f5bd3a200c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )