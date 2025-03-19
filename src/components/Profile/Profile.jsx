import React from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../Utilities/Button";
import styles from "./Profile.module.css";

const Profile = () => {
  const { login, userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!login) {
      navigate("/");
    }
  });
  const handleUpdateLogin = () => {
    // Lógica para alterar dados de login
    console.log("Alterar dados de login");
  };

  const handleUpdatePassword = () => {
    // Lógica para alterar senha
    console.log("Alterar senha");
  };

  const handleLogout = () => {
    // Lógica para fazer logout
    userLogout();
  };

  return (
    <section className={`animeLeft `}>
      <div className="container">
        <h1 className="title">Opções do usuário</h1>
        <nav className="containerProfile">
          <div className={styles.profileItem}>
            <Button className={styles.wrapper} onClick={handleUpdateLogin}>
              Alterar Dados de Login
            </Button>
          </div>
          <div className={styles.profileItem}>
            <Button className={styles.wrapper} onClick={handleUpdatePassword}>
              Alterar Senha
            </Button>
          </div>
          <div className={styles.profileItem}>
            <Button className={styles.wrapper} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Profile;
