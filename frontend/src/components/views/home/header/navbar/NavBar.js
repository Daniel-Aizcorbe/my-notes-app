import React from "react";
import AccionesRapidas from "./AccionesRapidas";
import OpcionesUsuario from "./OpcionesUsuario";
import Secciones from "./Secciones";
import "../styles/NavBar.css";

const NavBar = () => {

  return (
    <nav className="contenedor-secciones">
      <Secciones />
      <div className="botones">
        <AccionesRapidas />
        <OpcionesUsuario/>
      </div>
    </nav>
  );
};

export default NavBar;