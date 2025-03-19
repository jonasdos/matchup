import React from "react";
import Banner from "./Home/Banner";
import banner from "../assets/home.jpg";
import Button from "./Utilities/Button";
function Home() {
  return (
    <section>
      <div className="container">
        <Banner backgroundImage={banner}>
          <nav className="container">
            <h1 className="title">Reserve seu horário</h1>
            <Button>Reservar horário</Button>
          </nav>{" "}
        </Banner>
      </div>
    </section>
  );
}

export default Home;
