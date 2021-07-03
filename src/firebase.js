import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP53nNyQxGysTts8jpQifvvKHKy69LkcI",
  authDomain: "challange-6c24d.firebaseapp.com",
  projectId: "challange-6c24d",
  storageBucket: "challange-6c24d.appspot.com",
  messagingSenderId: "847130926240",
  appId: "1:847130926240:web:dabb6b274fe6355fa2bdc5",
  measurementId: "G-B4KW65G669",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // firstore is realtime database in firebase
const auth = firebase.auth();

export { db, auth };
