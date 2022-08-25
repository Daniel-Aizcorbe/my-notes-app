import React from "react";
import BarraBusqueda from "./BarraBusqueda";
import ListaTags from "./ListaTags";

const OpcionesTags = () => {

  return (
    <div className="contenedor-opciones-tags">
      <BarraBusqueda />
      <ListaTags />
    </div>
  );
};

export default OpcionesTags;