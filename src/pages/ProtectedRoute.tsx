import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "./Home";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";
import { FetcherContext } from "../contexts/FetcherContext";

const ProtectedRoute = () => {
  const { user, isOpen, setIsOpen } = useContext<any>(FetcherContext);
  return user ? (
    <Outlet />
  ) : (
    <>
      <Navigate replace to="/" />
    </>
  );
};

export default ProtectedRoute;
