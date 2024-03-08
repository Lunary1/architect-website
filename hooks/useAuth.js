import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const userEmail = user.email;

    // ...
  } else {
    // User is signed out
    // ...
  }
});


