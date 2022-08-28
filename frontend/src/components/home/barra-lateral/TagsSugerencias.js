import React, {useState} from "react";
import Tag from "./Tag";
import {azul} from "../logica/colores-tag";

import "./styles/TagsSugerencias.css";

const TagsSugerencias = () => {

  const [mostrar,setMostrar] = useState(false);

  return (
    <div>
      <ul className={ mostrar ? "lista-tags-sugerencias " : "oculto"}>
        <Tag
          nombre={"cosas"}
          color={azul}
          id={12}
        />
      </ul>
      <button onClick={() => setMostrar(!mostrar)}>
        toggle
      </button>
    </div>
  );
};

export default TagsSugerencias;