import React from "react";

const Usuario = () => {

  const opciones = () => alert("OPCIONES");

  return (
    <div className="contenedor-usuario">
      <button className="boton-usuario" onClick={() => opciones()}>
        <img
          alt="imagen de usuario"
          src="#"
          className="imagen-usuario"
        />
      </button>
    </div>
  );
};

export default Usuario;