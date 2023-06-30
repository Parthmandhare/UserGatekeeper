import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCruTJK9B1Dd9-ImORBExapI2yi6jFrBS4",
  authDomain: "userloginsignup-21a00.firebaseapp.com",
  projectId: "userloginsignup-21a00",
  storageBucket: "userloginsignup-21a00.appspot.com",
  messagingSenderId: "605319655131",
  appId: "1:605319655131:web:7f3427d1a6fabb57f566fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};