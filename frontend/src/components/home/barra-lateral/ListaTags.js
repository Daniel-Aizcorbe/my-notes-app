import React from "react";
import {mostrarTags} from "../../../utils/logic/generar-tags";

import "./styles/ListaTags.css";
import {useSelector} from "react-redux";


const ListaTags = () => {

  const tags = useSelector(
    state => state.tags.tags
      .filter(tag => tag.seleccionado)
  );

  return (
    <ul className="lista-tags-select">
      {mostrarTags(tags)}
    </ul>
  );
};

export default ListaTags;