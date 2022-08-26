import React from "react";
import Tag from "./Tag";
import {azul, celeste, verdeClaro} from "../logica/colores-tag";

const ListaTags = () => {

  let id = 0;

  const tags = [
    {
      nombre: "estudio",
      color: azul
    },
    {
      nombre: "recordatorio",
      color: verdeClaro
    },
    {
      nombre: "apunte",
      color: celeste
    }
  ];

  const mostrarTags = (tags) => tags.map(tag => mostrarTag(tag));

  const mostrarTag = (tag) => {
    return <Tag
      nombre={tag.nombre}
      color={tag.color}
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