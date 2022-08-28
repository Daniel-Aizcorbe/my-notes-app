import React from "react";
import BotonBuscar from "../commons/BotonBuscar";
import CrearNota from "../commons/CrearNota";
import "../styles/AccionesRapidas.css";

const AccionesRapidas = () => {

  return (
    <div className="contenedor-acciones-rapidas">
      <BotonBuscar />
      <CrearNota />
    </div>
  );
}

export default AccionesRapidas;