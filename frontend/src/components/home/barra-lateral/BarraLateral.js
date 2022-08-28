import React from "react";

import TagsSeleccionados from "./TagsSeleccionados";
import TituloFiltro from "./TituloFiltro";

import "./styles/BarraLateral.css";


const BarraLateral = () => {

  return (
    <aside className="filtros">
      <TituloFiltro />
      <TagsSeleccionados />
    </aside>
  );
};

export default BarraLateral;