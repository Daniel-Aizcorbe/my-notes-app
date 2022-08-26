import React from "react";
import BotonesNota from "./BotonesNota";

const Nota = ({ titulo}) => {

  return (
    <li
      className="contenedor-nota"
    >
      <h2 className="titulo-nota">
        {titulo}
      </h2>
      <BotonesNota />
    </li>
  );
};

export default Nota;