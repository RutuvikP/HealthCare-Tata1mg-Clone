// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD1DkXMtEYbuAVQLqCMLGL-HbPh5DH0liA",
  authDomain: "signupform-71815.firebaseapp.com",
  projectId: "signupform-71815",
  storageBucket: "signupform-71815.appspot.com",
  messagingSenderId: "368586593782",
  appId: "1:368586593782:web:0592f8f3eeac28352423d7",
  measurementId: "G-Q45CGSDLVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
