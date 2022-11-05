import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8xI1zcWZr6Of1ZcakWBRFiSMJDSX9jz0",
  authDomain: "reacecommerce.firebaseapp.com",
  projectId: "reacecommerce",
  storageBucket: "reacecommerce.appspot.com",
  messagingSenderId: "44161977945",
  appId: "1:44161977945:web:c3cc36bde8f4525db9ab48"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)