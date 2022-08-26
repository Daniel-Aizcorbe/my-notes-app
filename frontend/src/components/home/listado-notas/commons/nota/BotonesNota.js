import React from "react";
import {HiOutlineStar} from "react-icons/hi";
import {IoFileTrayFullOutline} from "react-icons/io5";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";


const BotonesNota = () => {

  return (
    <div className="contenedor-botones-nota">
      <button
        className="boton-favoritos"
        onClick={() => alert("AGREGADO A FAVORITOS")}
      >
        <HiOutlineStar />
      </button>
      <button
        className="boton-archivar"
        onClick={() => alert("ARCHIVADO")}
      >
        <IoFileTrayFullOutline />
      </button>
      <button
        className="boton-editar"
        onClick={() => alert("EDITAR")}
      >
        <AiFillEdit />
      </button>
      <button
        className="boton-eliminar"
        onClick={() => alert("ELIMINAR")}
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default BotonesNota;