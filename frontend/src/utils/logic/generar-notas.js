import Nota from "../../components/home/listado-notas/commons/nota/Nota";
import React from "react";

const mostrarNota = (nota) => {

  return (
    <Nota
      titulo={nota.titulo}
      key={nota.id}
      favorito={nota.favorito}
    />
  );
};

export const mostrarNotas = (notas) => {return notas.map(nota => mostrarNota(nota))};

