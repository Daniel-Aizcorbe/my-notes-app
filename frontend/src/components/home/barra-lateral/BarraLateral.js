import React from "react";

import OpcionesTags from "./OpcionesTags";
import TituloFiltro from "./TituloFiltro";

import "./styles/BarraLateral.css";

const BarraLateral = () => {

  return (
    <aside className="filtros">
      <TituloFiltro />
      <OpcionesTags />
    </aside>
  );
};

export default BarraLateral;