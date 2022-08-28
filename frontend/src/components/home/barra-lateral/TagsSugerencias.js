import React, {useState} from "react";
import Tag from "./Tag";
import {azul} from "../logica/colores-tag";

import "./styles/TagsSugerencias.css";
import Boton from "../../commons/boton/Boton";

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
      <Boton
        titulo={"toogle"}
        onClick={() => setMostrar(!mostrar)}
      />
    </div>
  );
};

export default TagsSugerencias;