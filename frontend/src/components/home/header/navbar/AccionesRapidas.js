import React from "react";

import Boton from "../../../commons/boton/Boton";
import {FiSearch} from "react-icons/fi";
import {IoAddOutline} from "react-icons/io5";

import "../styles/AccionesRapidas.css";

const AccionesRapidas = () => {

  return (
    <div className="contenedor-acciones-rapidas">
      <Boton
        children={<FiSearch />}
        titulo={""}
        clases={"boton-redondo"}
      />
      <Boton
        children={<IoAddOutline />}
        clases={"boton-redondo"}
        titulo={""}
      />
    </div>
  );
}

export default AccionesRapidas;