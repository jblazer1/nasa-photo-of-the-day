import React from "react";

const Photo = props => {
  return <img src={props.apod.url} alt={props.apod.title} />;
};

export default Photo;
