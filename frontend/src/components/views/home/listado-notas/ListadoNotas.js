import React from "react";
import EncabezadoLista from "./EncabezadoLista";
import Notas from "./Notas";

const ListadoNotas = () => {

  return (
    <div className="lista-notas">
      <EncabezadoLista />
      <Notas />
    </div>
  );
};

export default ListadoNotas;