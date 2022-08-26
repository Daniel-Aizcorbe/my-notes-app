import React from "react";
import BotonPremium from "../commons/BotonPremium";
import Usuario from "../commons/Usuario";
import "../styles/OpcionesUsuario.css";

const OpcionesUsuario = () => {

  return (
    <div className="contenedor-opciones-usuario">
      <BotonPremium />
      <Usuario />
    </div>
  );
}

export default OpcionesUsuario;