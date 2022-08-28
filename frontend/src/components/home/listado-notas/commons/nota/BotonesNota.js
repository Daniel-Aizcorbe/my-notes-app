import React from "react";
import {HiOutlineStar} from "react-icons/hi";
import {IoFileTrayFullOutline} from "react-icons/io5";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import Boton from "../../../../commons/boton/Boton";


const BotonesNota = ({ favorito }) => {

  return (
    <div className="contenedor-botones-nota">
      <Boton
        clases={"boton-favoritos"}
        onClick={() => alert("AGREGADO A FAVORITOS")}
        children={<HiOutlineStar color={favorito ? "#ffbf00" : "#339989"} />}
      />
      <Boton
        clases={"boton-archivar"}
        onClick={() => alert("ARCHIVADO")}
        children={<IoFileTrayFullOutline />}
        titulo={""}
      />
      <Boton
        clases={"boton-editar"}
        onClick={() => alert("EDITAR")}
        titulo={""}
        children={<AiFillEdit />}
      />
      <Boton
        clases={"boton-eliminar"}
        onClick={() => alert("ELIMINAR")}
        children={<AiFillDelete />}
        titulo={""}
      />
    </div>
  );
};

export default BotonesNota;