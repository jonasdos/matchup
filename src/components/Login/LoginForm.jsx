import React from "react";
import { Link } from "react-router-dom";
import Button from "../Utilities/Button";
import Input from "../Utilities/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Utilities/Button.module.css";
import ErrorMsg from "../Utilities/AlertMsg";

const LoginForm = () => {
  const loginInput = useForm();
  const password = useForm("password");

  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginInput.validate() && password.validate()) {
      userLogin(loginInput.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input label="login" type="text" name="loginForm" {...loginInput} />
        <Input
          label="senha"
          type="password"
          name="passwordForm"
          {...password}
        />
        {loading ? (
          <Button disable>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <ErrorMsg errorMsg={error} />
      </form>

      <Link className={styles.perdeu} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
