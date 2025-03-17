import React from "react";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { Route, Routes } from "react-router-dom";

function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="create" element={<LoginCreate />} />

      <Route path="register" element={<LoginPasswordLost />} />
      <Route path="reset" element={<LoginPasswordReset />} />
    </Routes>
  );
}

export default LoginRoutes;
