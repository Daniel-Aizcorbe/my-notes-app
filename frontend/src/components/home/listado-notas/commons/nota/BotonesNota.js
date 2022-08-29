import React from "react";
import {HiOutlineStar} from "react-icons/hi";
import {IoFileTrayFullOutline} from "react-icons/io5";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import Boton from "../../../../commons/boton/Boton";
import {useDispatch} from "react-redux";
import {borrarnota, togglearchivada, togglefavorito} from "../../../../../redux/slices/notas/notaSlice";


const BotonesNota = ({ favorito, id, archivada }) => {

  const dispatch = useDispatch();

  return (
    <div className="contenedor-botones-nota">
      <Boton
        clases={"boton-favoritos"}
        children={<HiOutlineStar color={favorito ? "#ffbf00" : "#339989"} />}
        onClick={() => dispatch(togglefavorito({id}))}
      />
      <Boton
        clases={"boton-archivar"}
        onClick={() => dispatch(togglearchivada({id}))}
        children={<IoFileTrayFullOutline color={archivada ? "#ffbf00" : "#339989"} />}
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
        onClick={() => dispatch(borrarnota({id}))}
        children={<AiFillDelete />}
        titulo={""}
      />
    </div>
  );
};

export default BotonesNota;