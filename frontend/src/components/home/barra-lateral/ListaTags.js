import React from "react";

import Tag from "./Tag";

import "./styles/ListaTags.css";

const mostrarTags = (tags) => {

  return tags.map(tag => mostrarTag(tag));
}

const mostrarTag = (tag) => {
  return <Tag
    nombre={tag.nombre}
    color={tag.color}
    key={tag.id}
  />;
}

const ListaTags = ({tags}) => {

  return (
    <ul className="lista-tags-select">
      {mostrarTags(tags)}
    </ul>
  );
};

export default ListaTags;