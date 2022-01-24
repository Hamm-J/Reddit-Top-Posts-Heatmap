import React, { useContext, useState } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const FirebaseRegister = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

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

  return (
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
    </div>
  );
};

export default FirebaseRegister;
