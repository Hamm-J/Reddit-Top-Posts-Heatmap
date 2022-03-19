import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../../components/common/Button/Button";
import InputText from "../../components/common/InputText/InputText";
import InputEmail from "../../components/common/InputEmail/InputEmail";
import {
  FirebaseRegisterContainer,
  ErrorMessage,
} from "../Firebase/FirebaseRegister.styled";
import useFirebaseRegister from "./useFirebaseRegister";

interface Props {
  onClose: () => void;
}

const FirebaseRegister = ({ onClose }: Props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const firebaseRegister = useFirebaseRegister(
    auth,
    registerEmail,
    registerPassword,
    onClose,
    setError,
    setLoading
  );

  const register = (e: any) => {
    e.preventDefault();
    firebaseRegister();
  };

  return (
    <FirebaseRegisterContainer>
      <form onSubmit={(e) => register(e)}>
        <InputEmail
          onChange={(e) => setRegisterEmail(e.target.value)}
          placeholder="Email..."
          remFontSize={1.2}
          required
        ></InputEmail>
        <InputText
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="Password..."
          remFontSize={1.2}
          required
        ></InputText>
        <Button
          type="submit"
          label={loading ? "..." : "Register"}
          remFontSize={1.1}
          minWidth={88}
          backgroundColor="orange"
          borderColor="orange"
          borderColorActive="black"
          borderColorHover="black"
        ></Button>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FirebaseRegisterContainer>
  );
};

export default FirebaseRegister;
