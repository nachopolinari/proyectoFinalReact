// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7tbSIZWzbW6NQaiZZ5l1Vt2h48M3mvgc",
  authDomain: "proyectofinalreact-f3607.firebaseapp.com",
  projectId: "proyectofinalreact-f3607",
  storageBucket: "proyectofinalreact-f3607.appspot.com",
  messagingSenderId: "194650820692",
  appId: "1:194650820692:web:51ad0e23eeadd6473d1dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit= () => app