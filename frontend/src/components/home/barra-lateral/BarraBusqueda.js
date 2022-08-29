import React from "react";
import "./styles/BarraBusqueda.css";

const BarraBusqueda = ({ actualizarInput }) => {

  const change = (e) => actualizarInput(e.target.value);

  return (
    <div className="contenedor-barra-busqueda">
      <input
        className="barra-busqueda"
        type="text"
        placeholder="Agregar una etiqueta..."
        onChange={change}
      />
    </div>
  );
};

export default BarraBusqueda;