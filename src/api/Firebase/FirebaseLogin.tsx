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
import { FirebaseLoginContainer, ErrorMessage } from "./FirebaseLogin.styled";

const FirebaseLogin = () => {
  const { user, setUser } = useContext<any>(FetcherContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const login = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoading(false);
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
      switch (error.message) {
        case "Firebase: Error (auth/wrong-password).":
          setError("Incorrect Password...");
          break;

        case "Firebase: Error (auth/user-not-found).":
          setError("Incorrect Email...");
          break;

        default:
          setError("Incorrect. Please try again...");
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <FirebaseLoginContainer>
      {user ? (
        <>
          <p>Logged into: {user?.email}</p>
          <Button label="Logout" onClick={logout} remFontSize={1.1}></Button>
        </>
      ) : (
        <>
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
            <Button
              label={loading ? "..." : "Login"}
              type="submit"
              remFontSize={1.1}
            ></Button>
          </form>
          {error != "" && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}
    </FirebaseLoginContainer>
  );
};

export default FirebaseLogin;
