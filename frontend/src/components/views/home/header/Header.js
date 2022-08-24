import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./styles/Header.css";

const Header = () => {

  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;