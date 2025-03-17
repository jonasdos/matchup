import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LoginRoutes from "./components/Login/LoginRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rentals from "./components/Rentals/Rentals";
import { UserStorage } from "./UserContext";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<LoginRoutes />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rentals" element={<Rentals />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
