import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGRTCHX45ghxI9cEdSNFzyjfHXPWSznng",
  authDomain: "salvio10-9c3d3.firebaseapp.com",
  projectId: "salvio10-9c3d3",
  storageBucket: "salvio10-9c3d3.appspot.com",
  messagingSenderId: "1019735855542",
  appId: "1:1019735855542:web:1ebfcfc6cb6a51e5abb117",
  measurementId: "G-2V8QCGQS28"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
