import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="container">
        <div className={styles.footerContent}>
          <p>&copy; 2025 Jdados. Todos os direitos reservados.</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
