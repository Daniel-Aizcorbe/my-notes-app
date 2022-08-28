import React from "react";
import "./styles/Notas.css";
import {useSelector} from "react-redux";
import {mostrarNotas} from "../../../utils/logic/generar-notas";

const Notas = () => {

  const notas = useSelector((state) => state.notas.notas.filter(n => !n.archivado));

  return (
    <div className="contenedor-notas">
      <ul className="lista-notas">
        {mostrarNotas(notas)}
      </ul>
    </div>
  );
};

export default Notas;