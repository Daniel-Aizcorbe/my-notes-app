import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

const Tag = ({ nombre, color, key}) => {

  return (
    <li
      className="tag"
      style={
        {
          background:color,
        }
      }
      key={key}>
      {nombre}
      <button className="boton-quit"
        onClick={() => alert("QUITAR TAG")}
      >
        <AiOutlineCloseCircle />
      </button>
    </li>
  );
};

export default Tag;