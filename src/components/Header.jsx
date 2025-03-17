import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../UserContext";

function Header() {
  const { login, data, userLogout } = React.useContext(UserContext);

  return (
    <Headerdiv>
      <div>
        <h3>
          <Link to="/">Bola toda</Link>
        </h3>
      </div>
      <nav className="container">
        <ul>
          <li>
            <Link to={"/rentals"}>Reservar Horário</Link>
          </li>

          <li>
            {login ? (
              <Link to={"/profile"}> {data.name} </Link>
            ) : (
              <Link to={"/login"}> Login </Link>
            )}
          </li>
        </ul>
      </nav>
    </Headerdiv>
  );
}

export default Header;

const Headerdiv = styled.header`
  display: flex;
  height: 50px;

  justify-content: space-between;
  align-items: center;
  padding: 10px 4px;

  div {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-weight: bold;
      color: #007bff;
      img {
        margin-right: 10px;
        height: 40px;
      }
    }
  }
  nav {
    margin: 0;
  }
  nav ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1rem;
      a {
        text-decoration: none;
        font-size: 1rem;
        color: #007bff;
        transition: color 0.3s;

        &:hover {
          color: #0056b3;
        }
      }
    }
  }
`;
