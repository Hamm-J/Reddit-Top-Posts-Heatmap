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
import InputEmail from "../../components/common/InputEmail/InputEmail";

const FirebaseLogin = () => {
  const { user, setUser } = useContext<any>(FetcherContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const login = async (e: any) => {
    e.preventDefault();

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
      {user ? (
        <>
          <p>Logged into: {user?.email}</p>
          <Button label="Logout" onClick={logout} remFontSize={1.1}></Button>
        </>
      ) : (
        <form onSubmit={login}>
          <InputEmail
            onChange={(event) => setLoginEmail(event.target.value)}
            placeholder="Email..."
            remFontSize={1.2}
            required
          ></InputEmail>
          <InputText
            onChange={(event) => setLoginPassword(event.target.value)}
            placeholder="Password..."
            remFontSize={1.2}
            required
          ></InputText>
          <Button label="Login" type="submit" remFontSize={1.1}></Button>
        </form>
      )}
    </div>
  );
};

export default FirebaseLogin;
