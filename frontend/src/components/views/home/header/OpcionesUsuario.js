import React from "react";
import BotonPremium from "./BotonPremium";
import Usuario from "./Usuario";
import "./styles/OpcionesUsuario.css";

const OpcionesUsuario = () => {

  return (
    <div className="contenedor-opciones-usuario">
      <BotonPremium />
      <Usuario />
    </div>
  );
}

export default OpcionesUsuario;