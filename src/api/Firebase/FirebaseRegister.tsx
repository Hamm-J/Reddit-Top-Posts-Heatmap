import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../../components/common/Button/Button";
import InputText from "../../components/common/InputText/InputText";

interface Props {
  onClose: () => void;
}

const FirebaseRegister = ({ onClose }: Props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
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
    <div>
      <InputText
        onChange={(event) => setRegisterEmail(event.target.value)}
        placeholder="Sign Up: Username"
      ></InputText>
      <InputText
        onChange={(event) => setRegisterPassword(event.target.value)}
        placeholder="Sign Up: Password"
      ></InputText>
      <Button onClick={register} label="Register"></Button>
    </div>
  );
};

export default FirebaseRegister;
