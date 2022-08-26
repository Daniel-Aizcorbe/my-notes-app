import React from "react";
import AccionesRapidas from "./AccionesRapidas";
import OpcionesUsuario from "./OpcionesUsuario";

const BotonesHeader = () => {

  return (
    <div className="botones">
      <AccionesRapidas />
      <OpcionesUsuario/>
    </div>
  );
};

export default BotonesHeader;