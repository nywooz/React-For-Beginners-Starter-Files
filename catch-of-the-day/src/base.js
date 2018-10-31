// Rebase - react/firebase package allowing mirroring state to firebase changes
import Rebase from "re-base";
import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQmlCsAsFymRmZTTX0iY1mNjStzUQdYAk",
  authDomain: "catch-of-the-day-7d702.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-7d702.firebaseio.com"
  //   projectId: "catch-of-the-day-7d702",
  //   storageBucket: "catch-of-the-day-7d702.appspot.com",
  //   messagingSenderId: "475358133485"
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
