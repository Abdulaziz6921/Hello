import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDAVqeyxOTmuHcARzBxe9LUiNi_lMaoRC0",
  authDomain: "fir-auth-83b52.firebaseapp.com",
  projectId: "fir-auth-83b52",
  storageBucket: "fir-auth-83b52.appspot.com",
  messagingSenderId: "252637580169",
  appId: "1:252637580169:web:de097ce4c3b7a983f96f58",
  measurementId: "G-YSWRB100D0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
