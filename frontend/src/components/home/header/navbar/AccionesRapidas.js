import React from "react";

import Boton from "../../../commons/boton/Boton";
import {FiSearch} from "react-icons/fi";
import {IoAddOutline} from "react-icons/io5";

import "../styles/AccionesRapidas.css";
import {crearnota} from "../../../../redux/slices/notas/notaSlice";
import {useDispatch} from "react-redux";

const AccionesRapidas = () => {

  const nuevaNota = {
    titulo: "Nueva Nota",
    id: 1231,
    tags: [],
    favorito: false,
    archivada: false
  }

  const dispatch = useDispatch();

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
        onClick={() => dispatch(crearnota(nuevaNota))}
      />
    </div>
  );
}

export default AccionesRapidas;