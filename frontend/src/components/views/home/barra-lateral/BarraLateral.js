import React from "react";
import "./styles/BarraLateral.css";
import OpcionesTags from "./OpcionesTags";

const BarraLateral = () => {

  return (
    <aside className="filtros">
      <h2>
        Filtrar
      </h2>
      <OpcionesTags />
    </aside>
  );
};

export default BarraLateral;