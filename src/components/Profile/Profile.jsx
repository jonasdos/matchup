import React from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { login, data, userLogout } = React.useContext(UserContext);
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
    <div style={styles.container}>
      <h3>Seja Bem vindo, {login && data.name} </h3>
      <button style={styles.button} onClick={handleUpdateLogin}>
        Alterar Dados de Login
      </button>
      <button style={styles.button} onClick={handleUpdatePassword}>
        Alterar Senha
      </button>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "0 auto",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
  },
};

export default Profile;
