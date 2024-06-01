import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEkgb6zrKf5lrMBP89KoP5GgMDr2p4y1g",
  authDomain: "tennismanager-507b5.firebaseapp.com",
  projectId: "tennismanager-507b5",
  storageBucket: "tennismanager-507b5.appspot.com",
  messagingSenderId: "162642281727",
  appId: "1:162642281727:web:8d183f6699131ca5a4f8ca",
  measurementId: "G-T0F2CFY54L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);