// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCd651G275IspmbDAVLYZ459C2ImNFRL18",

  authDomain: "coderhouse-ecommerce-14dcd.firebaseapp.com",

  projectId: "coderhouse-ecommerce-14dcd",

  storageBucket: "coderhouse-ecommerce-14dcd.appspot.com",

  messagingSenderId: "313012094851",

  appId: "1:313012094851:web:e3fce07abf8215abef18b6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)