import ListaTags from "./ListaTags";
import TagsSugerencias from "./TagsSugerencias";
import BarraBusqueda from "./BarraBusqueda";

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

  return (
      <div className="contenedor-tags">
        <ListaTags tags={tags}/>
        <BarraBusqueda />
        <TagsSugerencias />
      </div>
  );
};

export default TagsSeleccionados;