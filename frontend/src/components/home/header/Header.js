import React from "react";
import Logo from "./Logo";
import NavBar from "./navbar/NavBar";
import "./styles/Header.css";

const Header = () => {

  return (
    <header id="#header">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;