import React from "react";
import {
  addNewUser,
  getlocalUserData,
  removeLocalUserData,
  saveLocalUserData,
  validateLogin,
} from "./mockdatabase/db";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogin = React.useCallback(
    async function (login, password) {
      try {
        setLoading(true);
        const response = await validateLogin(login, password);
        if (response.cod === "401 Unauthorized") {
          setError(`${response.message}`);
        }

        saveLocalUserData(response.user);
        setData(response.user);
        setLogin(true);

        navigate("/");
      } catch (error) {
        setError(error.message);

        setLogin(false);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );
  const userCreate = React.useCallback(
    async function (name, login, password) {
      console.log("Criar usuário no Context");
      try {
        setLoading(true);
        const response = await addNewUser(name, login, password);
        if (response.cod === "409 Conflict") {
          setError(`${response.message}`);
          return;
        }
        userLogin(response.user.login, response.user.password);
      } catch (error) {
        setError(error.message);

        setLogin(false);
      } finally {
        setLoading(false);
      }
    },
    [userLogin]
  );
  const userLogout = React.useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    removeLocalUserData();
    navigate("/");
  }, [navigate]);

  React.useEffect(() => {
    async function autoLogin() {
      const localData = getlocalUserData();
      if (!localData) {
        return;
      } else {
        const validation = await validateLogin(
          localData.login,
          localData.password
        );
        if (validation.cod === "401 Unauthorized") {
          userLogout();
          return;
        }
        setData(localData);
        setLogin(true);
      }
    }
    autoLogin();
  }, [userLogout]);
  return (
    <div>
      <UserContext.Provider
        value={{
          login,
          data,
          loading,
          error,
          userCreate,
          userLogin,
          userLogout,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};
