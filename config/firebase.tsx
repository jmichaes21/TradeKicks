
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import '@react-native-firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDZiduCi1iNL0xxyCryK4YiUTHeApHnroA",
  authDomain: "chat-tradekicks.firebaseapp.com",
  projectId: "chat-tradekicks",
  storageBucket: "chat-tradekicks.appspot.com",
  messagingSenderId: "803759678441",
  appId: "1:803759678441:web:7167c0bfd2a5de29ebe178",
  measurementId: "G-S5WTQJPYNB"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth();
const database = getFirestore();
const firestore = getFirestore(app)

const createAccount = async (user) => {
  try {
    const { user: createdUser } = await createUserWithEmailAndPassword(auth, user.email, user.password);
    console.log("User created:", createdUser);
    alert("User " + user.name + " was created successfully.");
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.error("Create account failed: email already in use");
      alert("The email address is already in use.");
    } else if (error.code === "auth/invalid-email") {
      console.error("Create account failed: invalid email");
      alert("The email address is invalid.");
    } else if (error.code === "auth/weak-password") {
      console.error("Create account failed: weak password");
      alert("The password must be at least 6 characters long.");
    } else {
      console.error("Create account failed:", error.message);
      alert("Create account failed.");
    }
  }
};
// Define login method
const login = async (user, successCallback, errorCallback) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
    const loggedInUser = userCredential.user;
    successCallback(loggedInUser);
  } catch (error) {
    errorCallback(error);
  }
};

export { auth, firestore,createAccount, login };
