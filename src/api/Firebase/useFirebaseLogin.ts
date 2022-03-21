import { Auth, signInWithEmailAndPassword } from "firebase/auth";

const useFirebaseLogin = (
  auth: Auth,
  email: string,
  password: string,
  setUser: React.Dispatch<React.SetStateAction<{}>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async () => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log(user);
      setUser(user);
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
  };
};

export default useFirebaseLogin;
