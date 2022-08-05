import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA46sfNTtM7Xr8syI-Fj3QxjhdRUnp5otI",
  authDomain: "fireblogsol.firebaseapp.com",
  projectId: "fireblogsol",
  storageBucket: "fireblogsol.appspot.com",
  messagingSenderId: "820232674513",
  appId: "1:820232674513:web:85eb03b39d2123a31479f0",
  measurementId: "G-1SZ43S7GK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth, email, password)
      console.log(userCredential)
      navigate("/")
  } catch (error) {
    console.log(error)
  }}

  export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth, email, password)
        console.log(userCredential)
        navigate("/")
    } catch (error) {
      console.log(error)
    }}