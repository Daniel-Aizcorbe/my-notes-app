import React from "react";
import "./styles/BarraLateral.css";
import OpcionesTags from "./OpcionesTags";

const BarraLateral = () => {

  return (
    <aside className="filtros">
      <div className="contenedor-titulo-filtro">
        <h2 className="titulo-barra">
          Filtrar por tags
        </h2>
      </div>
      <OpcionesTags />
    </aside>
  );
};

export default BarraLateral;