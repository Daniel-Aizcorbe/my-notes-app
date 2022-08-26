import React from "react";
import "./styles/BarraLateral.css";
import OpcionesTags from "./OpcionesTags";
import TituloFiltro from "./TituloFiltro";

const BarraLateral = () => {

  return (
    <aside className="filtros">
      <TituloFiltro />
      <OpcionesTags />
    </aside>
  );
};

export default BarraLateral;