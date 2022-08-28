import React from "react";

const Boton = ({ children, titulo, clases, onClick }) => {

  return (
    <button
      className={clases}
      onClick={onClick}
    >
      {children}
      <p style={titulo !== "" ? {paddingLeft: "3px", margin: "0"} : {margin:"0"}}>
        {titulo}
      </p>
    </button>
  );
};

export default Boton;