import React from "react";

const Tag = ({ nombre, color}) => {

  return (
    <li className="tag" style={{color:color}}>
      {nombre}
    </li>
  );
};

export default Tag;