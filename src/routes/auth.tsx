import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const auth = useSelector((state: any) => state.auth);
  if (!auth.user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default Auth;
