import React from "react";

const Seccion = ({ nombre, seccion="seccion" }) => {

  const actualizarSeccion = (seccion) => alert(seccion);

  return (
    <li>
      <button className="seccion" onClick={() => actualizarSeccion(seccion)}>
        {nombre}
      </button>
    </li>
  );
};

export default Seccion;