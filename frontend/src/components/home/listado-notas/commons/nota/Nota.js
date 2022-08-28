import React from "react";
import BotonesNota from "./BotonesNota";

const Nota = ({ titulo, favorito }) => {

  return (
    <li
      className="contenedor-nota"
    >
      <h2 className="titulo-nota">
        {titulo}
      </h2>
      <BotonesNota favorito={favorito}/>
    </li>
  );
};

export default Nota;