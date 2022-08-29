import React from "react";
import "./styles/Notas.css";
import {mostrarNotas} from "../../../utils/logic/generar-notas";
import {useSelector} from "react-redux";

const Notas = () => {

  const notas = useSelector(state => state.notas.notas);

  return (
    <div className="contenedor-notas">
      <ul className="lista-notas">
        {mostrarNotas(notas)}
      </ul>
    </div>
  );
};

export default Notas;