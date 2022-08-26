import React from "react";
import {BsSortDown} from "react-icons/bs";

const BotonOrdenar = () => {

  return (
    <button
      className="boton-ordenar"
      onClick={() => alert("ORDENAR")}
    >
      <BsSortDown />
    </button>
  );
};

export default BotonOrdenar;