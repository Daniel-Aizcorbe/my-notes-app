import ListaTags from "./ListaTags";
import TagsSugerencias from "./TagsSugerencias";
import BarraBusqueda from "./BarraBusqueda";

import React, {useState} from "react";
import { bordo, celeste, naranja, verdeOscuro} from "../logica/colores-tag";

import "./styles/TagsSeleccionados.css";

const TagsSeleccionados = () => {

  const tags = [
    {
      nombre:"holis",
      color: celeste,
      id:"aasdad"
    },
    {
      nombre:"etiqueta",
      color: verdeOscuro,
      id:"dwasdw"
    },
    {
      nombre: "dds",
      color: bordo,
      id:"asdwqc"
    },
    {
      nombre: "tarea",
      color: naranja,
      id:"ohjjgas"
    }
  ];

  //const [mostrar, setMostrar] = useState(false);

  return (
    <div className="contenedor-tags">
      <div className="contenedor-buscador-tags">
        <ListaTags tags={tags}/>
        <BarraBusqueda />
      </div>
      <TagsSugerencias />
    </div>
  );
};

export default TagsSeleccionados;