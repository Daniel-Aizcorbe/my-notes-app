import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

import "./styles/Tag.css";
import Boton from "../../commons/boton/Boton";
import {useDispatch} from "react-redux";
import {deletetag} from "../../../redux/slices/tags/tagSlice";

const Tag = ({ nombre, color, id}) => {

  const dispatch = useDispatch();

  return (
    <li
      className="tag"
      style={
        {
          background:color,
        }
      }
      key={id}>
      {nombre}
      <Boton
        titulo={""}
        clases={"boton-quit"}
        onClick={() => dispatch(deletetag({id}))}
        children={<AiOutlineCloseCircle />}
      />
    </li>
  );
};

export default Tag;