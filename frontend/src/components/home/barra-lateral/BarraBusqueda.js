import React from "react";
import "./styles/BarraBusqueda.css";

const BarraBusqueda = () => {

  return (
    <div className="contenedor-barra-busqueda">
      <input
        className="barra-busqueda"
        type="text"
        placeholder="Agregar una etiqueta..."

      />
    </div>
  );
};

export default BarraBusqueda;