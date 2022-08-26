import React from "react";
import Seccion from "../commons/Seccion";
import "../styles/Secciones.css";

const Secciones = () => {

  return (
    <ul className="secciones">
      <Seccion nombre="Archivadas"/>
      <Seccion
        nombre="Mis Notas"
        clases={"seccion actual"}
      />
      <Seccion nombre="Favoritas"/>
      <Seccion nombre="Etiquetas"/>
    </ul>
  );
};

export default Secciones;

