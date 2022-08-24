import React from "react";
import Seccion from "./Seccion";

const Secciones = () => {

  return (
    <ul className="secciones">
      <Seccion nombre="Portada"/>
      <Seccion nombre="Mi Lista"/>
      <Seccion nombre="Descubrir"/>
      <Seccion nombre="Colecciones"/>
    </ul>
  );
};

export default Secciones;

