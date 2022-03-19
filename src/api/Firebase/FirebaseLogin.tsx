import React, { useContext, useState } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../../components/common/Button/Button";
import InputText from "../../components/common/InputText/InputText";
import InputEmail from "../../components/common/InputEmail/InputEmail";
import {
  FirebaseLoginContainer,
  ErrorMessage,
  LoggedInContainer,
  LoggedOutContainer,
  LoggedInMessage,
} from "./FirebaseLogin.styled";
import useFirebaseLogin from "./useFirebaseLogin";

const FirebaseLogin = () => {
  const { user, setUser } = useContext<any>(FetcherContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const firebaseLogin = useFirebaseLogin(
    auth,
    loginEmail,
    loginPassword,
    setUser,
    setError,
    setLoading
  );
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firebaseLogin();
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <FirebaseLoginContainer>
      {user ? (
        <LoggedInContainer>
          <LoggedInMessage>{user?.email}</LoggedInMessage>
          <div>
            <Button
              label="Logout"
              onClick={logout}
              remFontSize={1.1}
              backgroundColor="orange"
              borderColor="orange"
              borderColorActive="black"
              borderColorHover="black"
            ></Button>
          </div>
        </LoggedInContainer>
      ) : (
        <LoggedOutContainer>
          <form
            onSubmit={(e) => {
              login(e);
            }}
          >
            <InputEmail
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Email..."
              remFontSize={1.2}
              required
            ></InputEmail>
            <InputText
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password..."
              remFontSize={1.2}
              required
            ></InputText>
            <Button
              label={loading ? "..." : "Login"}
              type="submit"
              remFontSize={1.1}
              backgroundColor="orange"
              borderColor="orange"
              borderColorActive="black"
              borderColorHover="black"
            ></Button>
          </form>
          {error != "" && <ErrorMessage>{error}</ErrorMessage>}
        </LoggedOutContainer>
      )}
    </FirebaseLoginContainer>
  );
};

export default FirebaseLogin;
