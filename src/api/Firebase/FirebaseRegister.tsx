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

  const register = async (e: any) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      onClose();
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
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
      <Button type="submit" label="Register" remFontSize={1.1}></Button>
    </form>
  );
};

export default FirebaseRegister;
