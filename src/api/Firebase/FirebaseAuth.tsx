import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const FirebaseAuth = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
    // TODO: replace the below placeholder component
    <div>
      <input
        type="text"
        placeholder="sign up: username"
        onChange={(event) => setRegisterEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="sign up: password"
        onChange={(event) => setRegisterPassword(event.target.value)}
      />
      <button onClick={register}>register</button>

      <br />

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

export default FirebaseAuth;
