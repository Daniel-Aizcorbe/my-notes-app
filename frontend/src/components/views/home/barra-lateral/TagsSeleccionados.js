import React from "react";
import Tag from "./Tag";

const TagsSeleccionados = () => {

  const tagsSeleccionados = [
    {
      nombre:"holis",
      color:"brown"
    },
    {
      nombre:"etiqueta",
      color: "yellow"
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
    <div className="contenedor-tags-seleccionados">
      <ul className="lista-tags-select">
        {mostrarTags(tagsSeleccionados)}
      </ul>
    </div>
  );
};

export default TagsSeleccionados;