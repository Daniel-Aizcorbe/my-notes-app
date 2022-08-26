import React from "react";

const Usuario = () => {

  const opciones = () => alert("OPCIONES");

  return (
      <button className="boton-usuario" onClick={() => opciones()}>
        <img
          alt="imagen de usuario"
          src="frontend/src/components/home/header/commons/Usuario#"
          className="imagen-usuario"
        />
      </button>
  );
};

export default Usuario;