import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfji8LVg0SRg51OmPMwALz1QrUCk3RzIY",
  authDomain: "chat-132b8.firebaseapp.com",
  projectId: "chat-132b8",
  storageBucket: "chat-132b8.appspot.com",
  messagingSenderId: "1007433769917",
  appId: "1:1007433769917:web:34af9baed3841136e328d4",
  measurementId: "G-XTJG2R4NM9"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
