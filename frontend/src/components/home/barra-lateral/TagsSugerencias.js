import React from "react";
import Tag from "./Tag";
import {azul} from "../logica/colores-tag";

const TagsSugerencias = () => {

  let mostrar = true;

  return (
    <div className={mostrar ? "resultados" : "oculto"}>
      <ul className="lista-tags-sugerencias">
        <Tag
          nombre={"cosas"}
          color={azul}
          id={12}
        />
      </ul>
    </div>
  );
};

export default TagsSugerencias;