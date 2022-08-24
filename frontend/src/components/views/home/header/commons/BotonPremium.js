import React from "react";
import {IoDiamondOutline} from "react-icons/io5";

const BotonPremium = () => {

  const clic = () => alert("ACTUALIZAR")

  return (
    <button className="boton-premium" onClick={() => clic()}>
      <IoDiamondOutline />
      <span>
        Actualizar
      </span>
    </button>
  );
};

export default BotonPremium;