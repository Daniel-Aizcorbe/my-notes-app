import React from "react";
import Seccion from "../commons/Seccion";
import "../styles/Secciones.css";

const Secciones = () => {

  return (
    <ul className="secciones">
      <Seccion
        nombre="Archivadas"
        activo={false}
      />
      <Seccion
        nombre="Mis Notas"
        activo={true}
      />
      <Seccion
        nombre="Favoritas"
        activo={false}
      />
      <Seccion
        nombre="Etiquetas"
        activo={false}
      />
    </ul>
  );
};

export default Secciones;

