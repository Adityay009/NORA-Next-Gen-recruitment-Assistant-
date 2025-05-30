import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKz4kQFlnQl8JPVLHGB95nOmjEhpLNICE",
  authDomain: "nora-96e11.firebaseapp.com",
  projectId: "nora-96e11",
  storageBucket: "nora-96e11.firebasestorage.app",
  messagingSenderId: "503279767026",
  appId: "1:503279767026:web:f779dbf8557c5bf95eef6b",
  measurementId: "G-9K3EZ4RXY5"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);