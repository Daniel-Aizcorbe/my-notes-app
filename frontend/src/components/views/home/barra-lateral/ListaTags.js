import React from "react";
import Tag from "./Tag";

const ListaTags = () => {

  let id = 0;

  const tags = [
    {
      nombre: "estudio",
      color: "red"
    },
    {
      nombre: "recordatorio",
      color: "green"
    },
    {
      nombre: "apunte",
      color: "lightblue"
    }
  ];

  const mostrarTags = (tags) => tags.map(tag => mostrarTag(tag));

  const mostrarTag = (tag) => {
    return <Tag
      nombre={tag.nombre}
      color={"rgba(255, 209, 102, 60%)"}
      key={id++}
    />;
  }

  return (
    <div className="contenedor-tags">
      <ul className="lista-tags">
        {mostrarTags(tags)}
      </ul>
    </div>
  );
};

export default ListaTags;