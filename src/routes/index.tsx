import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./auth";
import MainLayout from "../layouts/main-layout";
import { Login, Packages, Payment, Result } from "../pages";
import { LoginLayout } from "../layouts";

interface AppRoutesProps {}

const AppRoutes: React.FC<AppRoutesProps> = (props) => {
  return (
    <Routes>
      <Route path="login" element={<LoginLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<Auth />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="packages" />} />
          <Route path="packages" element={<Packages />} />
          <Route path="payment" element={<Payment />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
