import Tag from "../../components/home/barra-lateral/Tag";
import React from "react";

export const mostrarTags = (tags) => {

  return tags.map(tag => mostrarTag(tag));
}

const mostrarTag = (tag) => {
  return <Tag
    nombre={tag.nombre}
    color={tag.color}
    key={tag.id}
  />;
}