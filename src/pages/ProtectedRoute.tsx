import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { FetcherContext } from "../contexts/FetcherContext";

const ProtectedRoute = () => {
  const { user } = useContext<any>(FetcherContext);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
