import React, { useContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "./Home";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";
import { FetcherContext } from "../contexts/FetcherContext";

const ProtectedRoute = () => {
  const { user, isOpen, setIsOpen } = useContext<any>(FetcherContext);

  const [protect, setProtect] = useState(true);

  // If the user is logged in, turn off the protection for the user dashboard and
  // continue to not show the register modal.
  // If the user is not logged in, protect the user dashboard and show the
  // register screen

  useEffect(() => {
    if (user) {
      setProtect(false);
      setIsOpen(false);
    } else {
      // pass
      setIsOpen(true);
    }
  }, [user]);

  return protect ? (
    <>
      <Navigate replace to="/" />
      <RegisterScreen open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
