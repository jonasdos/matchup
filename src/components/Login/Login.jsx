import React from "react";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import { UserContext } from "../../UserContext";

function LoginRoutes() {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/profile" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="register" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}

export default LoginRoutes;
