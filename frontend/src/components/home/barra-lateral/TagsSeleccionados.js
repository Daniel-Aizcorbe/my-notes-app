import ListaTags from "./ListaTags";
import TagsSugerencias from "./TagsSugerencias";
import BarraBusqueda from "./BarraBusqueda";

import "./styles/TagsSeleccionados.css";

const TagsSeleccionados = () => {


  return (
      <div className="contenedor-tags">
        <ListaTags />
        <BarraBusqueda />
        <TagsSugerencias />
      </div>
  );
};

export default TagsSeleccionados;