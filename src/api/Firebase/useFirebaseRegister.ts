import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

const useFirebaseRegister = (
  auth: Auth,
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onClose?: () => void
) => {
  return async () => {
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log(user);
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
  };
};

export default useFirebaseRegister;
