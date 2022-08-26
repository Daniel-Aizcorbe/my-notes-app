import React from "react";
import BotonesNota from "./BotonesNota";

const Nota = ({ titulo, key}) => {

  return (
    <li
      className="contenedor-nota"
      key={key}
    >
      <h2 className="titulo-nota">
        {titulo}
      </h2>
      <BotonesNota />
    </li>
  );
};

export default Nota;