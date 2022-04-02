import { useState } from "react";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

const useFirebaseRegister = (
  auth: Auth,
  email: string,
  password: string,
  onClose?: () => void
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return [
    loading,
    error,
    async () => {
      try {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        setLoading(false);
        setError("");
        onClose && onClose();
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
    },
  ] as const;
};

export default useFirebaseRegister;
