import React from "react";
import Nota from "./commons/nota/Nota";
import "./styles/Notas.css";

const Notas = () => {

  const notas = [
    {
      titulo: "Nota #1",
      id:"1",
      cuerpo: "Hola esta es mi primer nota",
      tags: ["holis","nueva","cosas"],
      favorito: true
    },
    {
      titulo: "Nota #2",
      id:"2",
      cuerpo: "Ahora hago esta sin tags",
      tags: [],
      favorito: false
    }
  ];

  const mostrarNotas = (notas) => notas.map(nota => mostrarNota(nota));

  const mostrarNota = (nota) => {

    return (
      <Nota
        titulo={nota.titulo}
        key={nota.id}
        favorito={nota.favorito}
      />
    );
  }

  return (
    <div className="contenedor-notas">
      <ul className="lista-notas">
        {mostrarNotas(notas)}
      </ul>
    </div>
  );
};

export default Notas;