import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import styles from "../components/Header.module.css";

function Header() {
  const { login, data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">Bola toda</Link>
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
