import React from "react";
import EncabezadoLista from "./EncabezadoLista";
import Notas from "./Notas";
import "./styles/ListadoNotas.css";

const ListadoNotas = () => {

  return (
    <div className="contenedor-listado-notas">
      <EncabezadoLista />
      <Notas />
    </div>
  );
};

export default ListadoNotas;