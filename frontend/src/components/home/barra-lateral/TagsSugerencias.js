import React from "react";

import "./styles/TagsSugerencias.css";
import {useSelector} from "react-redux";
import {mostrarTags} from "../../../utils/logic/generar-tags";
import Boton from "../../commons/boton/Boton";

const TagsSugerencias = ({ input }) => {

  const tags = useSelector(
    state => state.tags.tags
      .filter(tag => !tag.seleccionado)
  );

  return (
    <div>
      <ul className={"lista-tags-sugerencias"}>
        {
          mostrarTags(tags.filter(t => t.nombre.includes(input)))
        }
        <Boton
          titulo={"Crear Tag"}
          clases={"boton-crear-tag"}
        />
      </ul>
    </div>
  );
};

export default TagsSugerencias;