import React from "react";
import Buscar from "../commons/Buscar";
import CrearNota from "../commons/CrearNota";
import "../styles/AccionesRapidas.css";

const AccionesRapidas = () => {

  return (
    <div className="contenedor-acciones-rapidas">
      <Buscar />
      <CrearNota />
    </div>
  );
}

export default AccionesRapidas;