import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBW1KeYfpkqgd3UFMWb7v6-99YB8klSmAg",
  authDomain: "firegram-afad7.firebaseapp.com",
  databaseURL: "https://firegram-afad7.firebaseio.com",
  projectId: "firegram-afad7",
  storageBucket: "firegram-afad7.appspot.com",
  messagingSenderId: "42661907202",
  appId: "1:42661907202:web:dfa0ca7d8b7620ceedd01b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};