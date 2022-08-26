import React, {useState} from "react";
import { bordo, celeste, naranja, verdeOscuro} from "../logica/colores-tag";
import ListaTags from "./ListaTags";
import TagsSugerencias from "./TagsSugerencias";

const TagsSeleccionados = () => {

  const tags = [
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

  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="contenedor-tags-seleccionados">
      <ListaTags tags={tags}/>
      <TagsSugerencias />
    </div>
  );
};

export default TagsSeleccionados;