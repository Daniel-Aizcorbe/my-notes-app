import React from "react";
import BotonOrdenar from "./BotonOrdenar";

const EncabezadoLista = () => {

  return (
    <div className="contenedor-encabezado">
      <h1>
        Mis Notas
      </h1>
      <BotonOrdenar />
    </div>
  );
};

export default EncabezadoLista;