import React from "react";
import Tag from "./Tag";
import { bordo, celeste, naranja, verdeOscuro} from "../logica/colores-tag";

const TagsSeleccionados = () => {

  const tagsSeleccionados = [
    {
      nombre:"holis",
      color: celeste
    },
    {
      nombre:"etiqueta",
      color: verdeOscuro
    },
    {
      nombre: "dds",
      color: bordo
    },
    {
      nombre: "tarea",
      color: naranja
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
        <li className="tag-search">
          <input
            type="text"
            placeholder={"agregar tag"}
          />
        </li>
      </ul>
    </div>
  );
};

export default TagsSeleccionados;