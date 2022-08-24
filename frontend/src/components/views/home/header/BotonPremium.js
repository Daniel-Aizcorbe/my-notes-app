import React from "react";
import {IoDiamondOutline} from "react-icons/io5";

const BotonPremium = () => {

  const clic = () => alert("ACTUALIZAR")

  return (
    <button onClick={() => clic()}>
      <IoDiamondOutline />
      Actualizar
    </button>
  );
};

export default BotonPremium;