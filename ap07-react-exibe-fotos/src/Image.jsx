import React from "react";

const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      title={`Fotógrafo: ${props.photographer}`}
    />
  );
};

export default Image;
