import React from "react";

const Nota = ({ titulo, cuerpo, tags}) => {

  return (
    <div>
      <h2>
        {titulo}
      </h2>
      <p>
        {cuerpo}
      </p>
      <div>
        {tags.join(", ")}
      </div>
    </div>
  );
};

export default Nota;