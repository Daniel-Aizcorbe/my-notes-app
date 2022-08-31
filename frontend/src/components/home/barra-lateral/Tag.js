import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

import "./styles/Tag.css";
import Boton from "../../commons/boton/Boton";
import {useDispatch} from "react-redux";
import {toggletag} from "../../../redux/slices/tags/tagSlice";

const Tag = ({ nombre, color, id, seleccionado}) => {

  const dispatch = useDispatch();

  return (
    <li
      className="tag"
      style={
        {
          background:color,
        }
      }
      key={id}
      onClick={!seleccionado ? () => dispatch(toggletag({id})) : null}
    >
      {nombre}
      {seleccionado ? <Boton
        titulo={""}
        clases={"boton-quit"}
        onClick={() => dispatch(toggletag({id}))}
        children={<AiOutlineCloseCircle />}
      /> : ""}
    </li>
  );
};

export default Tag;