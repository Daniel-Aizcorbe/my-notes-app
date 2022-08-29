import React from "react";

import "./styles/TagsSugerencias.css";
import { useSelector} from "react-redux";
import {mostrarTags} from "../../../utils/logic/generar-tags";

const TagsSugerencias = ({ input }) => {

  const tags = useSelector(
    state => state.tags.tags
      .filter(tag => !tag.seleccionado)
  );

  const tagsSugeridos = tags.filter(t => t.nombre.includes(input));

  console.log(tagsSugeridos);

  return (
    <div>
      <ul className={"lista-tags-sugerencias"}>
        {
          mostrarTags(tagsSugeridos)
        }
      </ul>
    </div>
  );
};

export default TagsSugerencias;