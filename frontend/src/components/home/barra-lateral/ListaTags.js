import React from "react";
import Tag from "./Tag";

let id = 0;

const mostrarTags = (tags) => tags.map(tag => mostrarTag(tag));

const mostrarTag = (tag) => {
  return <Tag
    nombre={tag.nombre}
    color={tag.color}
    key={id++}
  />;
}

const ListaTags = ({tags}) => {
  return (
    <ul className="lista-tags-select">
      {mostrarTags(tags)}
      <li className="tag-search" key={999}>
        <input
          type="text"
          placeholder={"agregar tag"}
        />
      </li>
    </ul>
  );
};

export default ListaTags;