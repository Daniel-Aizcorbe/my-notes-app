import ListaTags from "./ListaTags";
import TagsSugerencias from "./TagsSugerencias";
import BarraBusqueda from "./BarraBusqueda";

import "./styles/TagsSeleccionados.css";
import {useState} from "react";

const TagsSeleccionados = () => {

  const [input, setInput] = useState("");

  return (
      <div className="contenedor-tags">
        <ListaTags />
        <BarraBusqueda actualizarInput={setInput}/>
        <TagsSugerencias input={input}/>
      </div>
  );
};

export default TagsSeleccionados;