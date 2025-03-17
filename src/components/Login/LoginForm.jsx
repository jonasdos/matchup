import React from "react";
import { Link } from "react-router-dom";
import Button from "../Utilities/Button";
import Input from "../Utilities/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);

  const login = useForm();
  const password = useForm("password");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (login.validate() && password.validate()) {
      await userLogin(login.value, password.value);
    }
  };
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          label="login"
          type="text"
          id="loginForm"
          name="loginForm"
          {...login}
        />
        <Input
          label="senha"
          type="password"
          id="inputPassword"
          name="passwordForm"
          {...password}
        />
        <div>
          <Button name={loading ? "Carregando..." : "Entrar"} />
          <span>{error}</span>
        </div>

        <Link to="/login/create">
          <p>Cadastrar novo usuário</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
