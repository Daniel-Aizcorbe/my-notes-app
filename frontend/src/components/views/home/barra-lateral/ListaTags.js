import React from "react";
import Tag from "./Tag";

const ListaTags = () => {

  const tags = [
    {
      nombre: "estudio",
      color: "red"
    },
    {
      nombre: "recordatorio",
      color: "green"
    }
  ];

  const mostrarTags = (tags) => tags.map(tag => mostrarTag(tag));

  const mostrarTag = (tag) => {
    return <Tag
      nombre={tag.nombre}
      color={tag.color}
    />;
  }

  return (
    <div className="contenedor-barra-busqueda">
      <ul className="lista-tags">
        {mostrarTags(tags)}
      </ul>
    </div>
  );
};

export default ListaTags;