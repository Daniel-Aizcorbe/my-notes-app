import React from "react";

const Seccion = ({ nombre, clases="seccion" }) => {

  const actualizarSeccion = (seccion) => alert(seccion);

  return (
    <li>
      <button className={clases} onClick={() => actualizarSeccion(clases)}>
        {nombre}
      </button>
    </li>
  );
};

export default Seccion;