import React from "react";
import Boton from "../../../commons/boton/Boton";
import {IoDiamondOutline} from "react-icons/io5";

import "../styles/OpcionesUsuario.css";
const OpcionesUsuario = () => {

  return (
    <div className="contenedor-opciones-usuario">
      <Boton
        clases={"boton-premium"}
        titulo={"Actualizar"}
        children={<IoDiamondOutline />}
      />
      <Boton
        children={<img
          alt="imagen de usuario"
          src={"#USER"}
          className="imagen-usuario"
        />}
        titulo={""}
        clases={"boton-usuario"}
      />
    </div>
  );
}

export default OpcionesUsuario;