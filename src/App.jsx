import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rentals from "./components/Rentals/Rentals";
import { UserStorage } from "./UserContext";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rentals" element={<Rentals />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
