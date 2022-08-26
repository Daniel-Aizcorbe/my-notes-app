import React from "react";
import BarraBusqueda from "./BarraBusqueda";
import ListaTags from "./ListaTags";
import "./styles/OpcionesTag.css";
import TagsSeleccionados from "./TagsSeleccionados";

const OpcionesTags = () => {

  return (
    <div className="contenedor-opciones-tags">
      <TagsSeleccionados />
      <BarraBusqueda />
      <ListaTags />
    </div>
  );
};

export default OpcionesTags;