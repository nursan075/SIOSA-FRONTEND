// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf2UNGM5KO_C2e4wgBtH8UfsOS8ESxXDI",
    authDomain: "siosa-san.firebaseapp.com",
    projectId: "siosa-san",
    storageBucket: "siosa-san.appspot.com",
    messagingSenderId: "504218303783",
    appId: "1:504218303783:web:3bf1e1d5c2c3e8c5dfbd02",
    measurementId: "G-33NSS95PQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (process.env.NODE_ENV === 'production') {
    const analytics = getAnalytics();
}
export const auth = getAuth(app)