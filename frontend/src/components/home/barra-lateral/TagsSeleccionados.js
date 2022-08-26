import React, {useState} from "react";
import { bordo, celeste, naranja, verdeOscuro} from "../logica/colores-tag";
import ListaTags from "./ListaTags";
import TagsSugerencias from "./TagsSugerencias";
import BarraBusqueda from "./BarraBusqueda";

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
    <div className="contenedor-tags-seleccionados">
      <ListaTags tags={tags}/>
      <BarraBusqueda />
      <TagsSugerencias />
    </div>
  );
};

export default TagsSeleccionados;