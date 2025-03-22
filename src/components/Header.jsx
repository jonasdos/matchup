import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import styles from "../components/Header.module.css";
import logo from "../assets/BolaToda.svg";

function Header() {
  const { login, data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.containerLogo}>
          <Link to="/">
            <img src={logo} alt="Logomarca" />
          </Link>
          <div className={styles.headerlinks}>
            {" "}
            <Link>Reservar horário</Link> | <Link>Escolinha</Link> |{" "}
            <Link>Futfitness</Link>
          </div>
        </div>
        {login ? (
          <Link className={styles.login} to={"/profile"}>
            {data.name}
          </Link>
        ) : (
          <Link className={styles.login} to={"/login"}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
