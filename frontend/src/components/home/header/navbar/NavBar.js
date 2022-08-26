import React from "react";
import Secciones from "./Secciones";
import "../styles/NavBar.css";
import BotonesHeader from "./BotonesHeader";

const NavBar = () => {

  return (
    <nav className="contenedor-secciones">
      <Secciones />
      <BotonesHeader />
    </nav>
  );
};

export default NavBar;