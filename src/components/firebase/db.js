import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFBnTyFi-ZAMr3F1w5qQXfee9bRxHm-X8",
  authDomain: "topteam-2da20.firebaseapp.com",
  databaseURL: "https://topteam-2da20.firebaseio.com",
  projectId: "topteam-2da20",
  storageBucket: "topteam-2da20.appspot.com",
  messagingSenderId: "topteam-2da20",
  appId: "topteam-2da20",
  measurementId: "211382164592",
};

const fire = firebase.initializeApp(firebaseConfig);
const firestore = fire.firestore();
const auth = firebase.auth();

export { fire, firestore, auth };
