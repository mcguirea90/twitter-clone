// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-H9YgbA79kiPCEliWdvum-t8m5Fcen8c",
  authDomain: "twitter-clone-932c3.firebaseapp.com",
  projectId: "twitter-clone-932c3",
  storageBucket: "twitter-clone-932c3.appspot.com",
  messagingSenderId: "346435830164",
  appId: "1:346435830164:web:58a082bba96bf54e96cf81"
  
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage()
