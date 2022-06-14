import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnu1a0I56YomIRKv4f5SE0a5NWQiDQzD8",
  authDomain: "gestiones-274ab.firebaseapp.com",
  projectId: "gestiones-274ab",
  storageBucket: "gestiones-274ab.appspot.com",
  messagingSenderId: "51426182093",
  appId: "1:51426182093:web:b94f8c9af29ad17b003a84",
};

// eslint-disable-next-line import/prefer-default-export
export const app = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const firestore = firebase.firestore(app);
