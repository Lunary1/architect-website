import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./config";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signIn(auth, email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in", error);
  }
}

export async function signOutWithEmail() {
  try {
    return signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
}
