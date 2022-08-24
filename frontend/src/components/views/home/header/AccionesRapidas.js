import React from "react";
import Buscar from "./Buscar";
import CrearNota from "./CrearNota";
import "./styles/AccionesRapidas.css";

const AccionesRapidas = () => {

  return (
    <div className="contenedor-acciones-rapidas">
      <Buscar />
      <CrearNota />
    </div>
  );
}

export default AccionesRapidas;