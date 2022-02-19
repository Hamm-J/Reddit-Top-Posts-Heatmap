import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../../components/common/Button/Button";
import InputText from "../../components/common/InputText/InputText";
import InputEmail from "../../components/common/InputEmail/InputEmail";
interface Props {
  onClose: () => void;
}

const FirebaseRegister = ({ onClose }: Props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      onClose();
      setLoading(false);
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
      switch (error.message) {
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
          setError("Password must be at least 6 characters in length...");
          break;

        case "Firebase: Error (auth/email-already-in-use).":
          setError("Email already in use...");
          break;

        default:
          setError("Incorrect. Please try again...");
      }
    }
  };

  return (
    <>
      <form onSubmit={register}>
        <InputEmail
          onChange={(event) => setRegisterEmail(event.target.value)}
          placeholder="Email..."
          remFontSize={1.2}
          required
        ></InputEmail>
        <InputText
          onChange={(event) => setRegisterPassword(event.target.value)}
          placeholder="Password..."
          remFontSize={1.2}
          required
        ></InputText>
        <Button
          type="submit"
          label={loading ? "..." : "Login"}
          remFontSize={1.1}
        ></Button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default FirebaseRegister;
