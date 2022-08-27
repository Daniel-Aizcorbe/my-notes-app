import React from "react";
import "./styles/BarraBusqueda.css";

const BarraBusqueda = () => {

  return (
    <div className="contenedor-barra-busqueda">
      <input
        className="barra-busqueda"
        type="text"
        placeholder="Busca una etiqueta..."
      />
    </div>
  );
};

export default BarraBusqueda;