// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3mveUV-gZDqmZEFQ2V0YJyup-m5_V98Y",
  authDomain: "arch-d0f17.firebaseapp.com",
  databaseURL:
    "https://arch-d0f17-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "arch-d0f17",
  storageBucket: "arch-d0f17.appspot.com",
  messagingSenderId: "498963241705",
  appId: "1:498963241705:web:c64e66ef838756dbe66e78",
  measurementId: "G-YR8SQ6X9L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
