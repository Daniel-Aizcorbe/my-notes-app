import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

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
      <button className="boton-quit"
        onClick={() => alert("QUITAR TAG")}
      >
        <AiOutlineCloseCircle />
      </button>
    </li>
  );
};

export default Tag;