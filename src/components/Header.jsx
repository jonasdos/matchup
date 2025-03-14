import React from "react";



function Header() {
     
  return (
   
    <header>
      <a href="home"><img src= "../src/assets/soccer.svg" alt="Logo" />Bola toda</a>
      <nav>
        <ul>
        <li><a href="/reservar">Reservar Horário</a></li>
        <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;
