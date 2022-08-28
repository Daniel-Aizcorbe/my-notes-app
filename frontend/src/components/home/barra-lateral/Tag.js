import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

import "./styles/Tag.css";
import Boton from "../../commons/boton/Boton";

const Tag = ({ nombre, color, id}) => {

  return (
    <li
      className="tag"
      style={
        {
          background:color,
        }
      }
      key={id}>
      {nombre}
      <Boton
        titulo={""}
        clases={"boton-quit"}
        onClick={() => alert("QUITAR TAG")}
        children={<AiOutlineCloseCircle />}
      />
    </li>
  );
};

export default Tag;