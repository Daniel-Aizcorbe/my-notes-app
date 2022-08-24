import React from "react";
import Nota from "./Nota";

const Notas = () => {

  const notas = [
    {
      titulo: "Nota #1",
      cuerpo: "Hola esta es mi primer nota",
      tags: ["holis","nueva","cosas"]
    },
    {
      titulo: "Nota #2",
      cuerpo: "Ahora hago esta sin tags",
      tags: []
    }
  ];

  const mostrarNotas = (notas) => notas.map(nota => mostrarNota(nota));

  const mostrarNota = (nota) => {

    return (
      <Nota
        cuerpo={nota.cuerpo}
        titulo={nota.titulo}
        tags={nota.tags}
      />
    );
  }

  return (
    <div className="contenedor-notas">
      {mostrarNotas(notas)}
    </div>
  );
};

export default Notas;