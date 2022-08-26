import React from "react";
import "./styles/Logo.css";

const Logo = () => {

  return (
    <a href="/otra-pagina" className="contenedor-logo">
      <img
        alt="Logo de la pagina"
        src={"#"}
        className="logo"
      />
    </a>
  );
};

export default Logo;