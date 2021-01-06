import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA7AjiArcIjC9g3Ubca-5DLcXE8gv58E_0",
  authDomain: "react-recipe-app-6139f.firebaseapp.com",
  projectId: "react-recipe-app-6139f",
  storageBucket: "react-recipe-app-6139f.appspot.com",
  messagingSenderId: "67643196153",
  appId: "1:67643196153:web:d0df11931c4822c439d828",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
