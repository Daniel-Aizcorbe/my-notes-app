import React from "react";

const TagsSugerencias = () => {

  let mostrar = false;

  return (
    <div className={mostrar ? "resultados" : "oculto"}>
    </div>
  );
};

export default TagsSugerencias;