import React from "react";
import AccionesRapidas from "./AccionesRapidas";
import OpcionesUsuario from "./OpcionesUsuario";
import Secciones from "./Secciones";

const NavBar = () => {

  return (
    <nav className="contenedor-secciones">
      <Secciones />
      <AccionesRapidas />
      <OpcionesUsuario/>
    </nav>
  );
};

export default NavBar;