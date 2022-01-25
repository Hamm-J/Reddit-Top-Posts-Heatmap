import React, { useContext, useState } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../../components/common/Button/Button";
import InputText from "../../components/common/InputText/InputText";

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
      <InputText
        onChange={(event) => setLoginEmail(event.target.value)}
        placeholder="Login: Username"
      ></InputText>
      <InputText
        onChange={(event) => setLoginPassword(event.target.value)}
        placeholder="Login: Password"
      ></InputText>
      {user ? (
        <Button label="Logout" onClick={logout}></Button>
      ) : (
        <Button label="Login" onClick={login}></Button>
      )}
      {user && <h1>{user?.email}</h1>}
    </div>
  );
};

export default FirebaseLogin;
