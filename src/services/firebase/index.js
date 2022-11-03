import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBuLiThz5oOgYVWG4VKndKBg9rSjiaCYeE",
  authDomain: "rectajere.firebaseapp.com",
  projectId: "rectajere",
  storageBucket: "rectajere.appspot.com",
  messagingSenderId: "380570667117",
  appId: "1:380570667117:web:fb472cf146ac438f59d764"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)