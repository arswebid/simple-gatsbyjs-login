import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // Your Firebase config details go here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
