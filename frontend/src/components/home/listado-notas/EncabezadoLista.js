import React from "react";
import Boton from "../../commons/boton/Boton";
import {BsSortDown} from "react-icons/bs";

import "./styles/EncabezadoLista.css";

const EncabezadoLista = () => {

  return (
    <div className="contenedor-encabezado">
      <h1>
        Mis Notas
      </h1>
      <Boton
        clases={"boton-ordenar"}
        onClick={() => alert("ORDENAR")}
        titulo={""}
        children={<BsSortDown />}
      />
    </div>
  );
};

export default EncabezadoLista;