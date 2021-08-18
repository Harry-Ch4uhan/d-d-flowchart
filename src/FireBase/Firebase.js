import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFddnquKFe8_gvp3UqnXmi-a-9hK55w3s",
  authDomain: "hooks-practice-c1a8c.firebaseapp.com",
  databaseURL: "https://hooks-practice-c1a8c-default-rtdb.firebaseio.com",
  projectId: "hooks-practice-c1a8c",
  storageBucket: "hooks-practice-c1a8c.appspot.com",
  messagingSenderId: "594767013987",
  appId: "1:594767013987:web:e249c7e703fb8b747af056",
  measurementId: "G-RWWWNWGWFY",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
