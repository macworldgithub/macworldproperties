// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAdevDJNF9YHPT6jL0jypWJkWjFTv4dVpE",
  authDomain: "realestate-a6c4a.firebaseapp.com",
  projectId: "realestate-a6c4a",
  storageBucket: "realestate-a6c4a.appspot.com",
  messagingSenderId: "193299063073",
  appId: "1:193299063073:web:d0fe6f9b875e216a33de60",
  measurementId: "G-EVF6E15SC3"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;