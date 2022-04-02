import { useState } from "react";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";

const useFirebaseLogin = (auth: Auth, email: string, password: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return [
    loading,
    error,
    async () => {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        // clear error message on successful sign in
        setError("");
      } catch (error: any) {
        console.log(error.message);
        setLoading(false);
        switch (error.message) {
          case "Firebase: Error (auth/wrong-password).":
            return setError("Incorrect Password...");

          case "Firebase: Error (auth/user-not-found).":
            return setError("Incorrect Email...");

          default:
            return setError("Incorrect. Please try again...");
        }
      }
    },
  ] as const;
};

export default useFirebaseLogin;
