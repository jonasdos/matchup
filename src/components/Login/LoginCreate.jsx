import React from "react";
import Input from "../Utilities/Input";
import Button from "../Utilities/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import ErrorMsg from "../Utilities/AlertMsg";

const LoginCreate = () => {
  const { error, userCreate } = React.useContext(UserContext);
  const name = useForm();
  const login = useForm();
  const password = useForm("password");

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    if (name.validate() && login.validate && password.validate) {
      console.log("chamou");
      userCreate(name.value, login.value, password.value);
    }
  };

  return (
    <section>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleRegisterForm}>
        <Input label="nome" type="text" name="name" {...name} />
        <Input label="login" type="text" name="RegisterLogin" {...login} />
        <Input label="senha" type="password" name="password" {...password} />

        <Button type="submit">Cadastrar</Button>
        <ErrorMsg errorMsg={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
