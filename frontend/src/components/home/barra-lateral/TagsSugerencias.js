import React from "react";

import "./styles/TagsSugerencias.css";
import {useSelector} from "react-redux";
import {mostrarTags} from "../../../utils/logic/generar-tags";

const TagsSugerencias = () => {

  const tags = useSelector(
    state => state.tags.tags
      .filter(tag => !tag.seleccionado)
  );

  return (
    <div>
      <ul className={"lista-tags-sugerencias"}>
        {
          mostrarTags(tags)
        }
      </ul>
    </div>
  );
};

export default TagsSugerencias;