import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF1zJ1GlT5MNcwXnLR-fCTR6RYUKpv8E0",
  authDomain: "n315-matspark.firebaseapp.com",
  projectId: "n315-matspark",
  storageBucket: "n315-matspark.appspot.com",
  messagingSenderId: "433038809376",
  appId: "1:433038809376:web:9e60aa02eec927b7231f45",
  measurementId: "G-T0SXRYDX9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function initListeners() {
  $("#createAcctBtn").on("click", (e) => {
    e.preventDefault();
    let fName = $("#fNameC").val();
    let email = $("#emailC").val();
    let pw = $("#pwC").val();
    createUserWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message " + errorMessage);
      });
  });
  $("#signIn").on("click", (e) => {
    e.preventDefault();
    let email = $("#email").val();
    let pw = $("#pw").val();
    signInWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message " + errorMessage);
      });
  });
  $("#signOut").on("click", (e) => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error Message " + errorMessage);
      });
  });
}

$(document).ready(function () {
  initListeners();
});
