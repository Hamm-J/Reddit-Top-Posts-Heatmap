import React, { useContext, useState, useEffect } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../common/Button/Button";
import InputText from "../common/InputText/InputText";
import InputEmail from "../common/InputEmail/InputEmail";
import {
  LoginContainer,
  ErrorMessage,
  LoggedInContainer,
  LoggedOutContainer,
  LoginForm,
  LoggedInMessage,
  InputWrapper,
  ButtonWrapper,
} from "./Login.styled";
import useFirebaseLogin from "../../api/Firebase/useFirebaseLogin";

const Login = () => {
  const { user, setUser, isOpen, setIsOpen } = useContext<any>(FetcherContext);

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

  // clear error message when successfully logged in
  useEffect(() => {
    if (user) {
      setError("");
    }
  }, [user]);
  return (
    <LoginContainer>
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
          <LoginForm
            onSubmit={(e) => {
              login(e);
            }}
          >
            <InputWrapper>
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
            </InputWrapper>
            <ButtonWrapper>
              <Button
                label={loading ? "..." : "Login"}
                type="submit"
                remFontSize={1.1}
                backgroundColor="orange"
                borderColor="orange"
                borderColorActive="black"
                borderColorHover="black"
                minWidth={123}
              ></Button>
              <Button
                label="Sign up?"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                remFontSize={1.1}
                backgroundColor="orange"
                borderColor="orange"
                borderColorActive="black"
                borderColorHover="black"
                minWidth={123}
              ></Button>
            </ButtonWrapper>
            {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
          </LoginForm>
        </LoggedOutContainer>
      )}
    </LoginContainer>
  );
};

export default Login;
