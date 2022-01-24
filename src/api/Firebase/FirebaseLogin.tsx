import React, { useContext, useState } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const FirebaseLogin = () => {
  const { user, setUser } = useContext<any>(FetcherContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="login: username"
        onChange={(event) => setLoginEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="login: password"
        onChange={(event) => setLoginPassword(event.target.value)}
      />
      <button onClick={login}>login</button>
      <br />
      <button onClick={logout}>logout</button>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default FirebaseLogin;
