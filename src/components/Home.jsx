import React from "react";
import Banner from "./Home/Banner";
import banner from "../assets/home.jpg";
import areia from "../assets/areia.png";
import styles from "./Home.module.css";
import Button from "./Utilities/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/rentals");
  };
  return (
    <>
      <section className="animeLeft">
        <div className="container">
          <h1 className="title">Grama sintética</h1>
          <Banner backgroundImage={banner}>
            <nav className="container">
              <h4 className="description">Quadra com grama sintetica</h4>
              <h4>Dimensões: 25 x 15</h4>
              <Button onClick={handleNavigate}>Reservar horário</Button>
            </nav>
          </Banner>
        </div>
      </section>
      <section className="animeLeft">
        <div className="container">
          <h1 className="title">Quadras de areia</h1>
          <Banner backgroundImage={areia}>
            <nav className="container">
              <h4 className="description">Quadra com grama sintetica</h4>
              <h4>Dimensões: 25 x 15</h4>
              <Button onClick={handleNavigate}>Reservar horário</Button>
            </nav>
          </Banner>
        </div>
      </section>
      <section className="animeLeft">
        <div className={`${styles.structure} container`}>
          <h1 className="title">Estrutura</h1>
          <div className={styles.structureContent}>
            <div className={styles.structureItem}>
              <h4>Quadras</h4>
              <p>Quadras de grama sintética e areia</p>
            </div>
            <div className={styles.structureItem}>
              <h4>Bar</h4>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
