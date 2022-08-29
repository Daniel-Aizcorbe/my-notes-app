import React from "react";
import BotonesNota from "./BotonesNota";

const Nota = ({ titulo, favorito, archivada, id }) => {

  return (
    <li
      className="contenedor-nota"
    >
      <h2 className="titulo-nota">
        {titulo}
      </h2>
      <BotonesNota
        favorito={favorito}
        archivada={archivada}
        id={id}
      />
    </li>
  );
};

export default Nota;