// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBa7aMGjBawX8o7T53SUU17Rdg_vkKOiWQ",
    authDomain: "linkedin-clone-61668.firebaseapp.com",
    projectId: "linkedin-clone-61668",
    storageBucket: "linkedin-clone-61668.appspot.com",
    messagingSenderId: "453488474567",
    appId: "1:453488474567:web:de615b04247edfe59e81e2",
    measurementId: "G-G65SYNJTW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export function _signInWithPopup() {
    return signInWithPopup(auth, provider)
}