import React from "react";

import Boton from "../../../commons/boton/Boton";

const Seccion = ({ nombre, activo=false}) => {

  const actualizarSeccion = (seccion) => alert(seccion);

  return (
    <li>
      <Boton
        clases={activo ? "seccion actual" : "seccion"}
        onClick={() => actualizarSeccion("SECCION")}
        titulo={nombre}
        children={""}
      />
    </li>
  );
};

export default Seccion;