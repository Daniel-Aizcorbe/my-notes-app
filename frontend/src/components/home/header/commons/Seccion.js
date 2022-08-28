import React from "react";

import Boton from "../../../commons/boton/Boton";

const Seccion = ({ nombre}) => {

  const actualizarSeccion = (seccion) => alert(seccion);

  return (
    <li>
      <Boton
        clases={"seccion"}
        onClick={() => actualizarSeccion("SECCION")}
        titulo={nombre}
        children={""}
      />
    </li>
  );
};

export default Seccion;