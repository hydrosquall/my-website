import React from "react";
import "./Graphic.css";
import image from "./graphic.png";

const Graphic = ({ data, className }) => (
  <div className={`graphic ${className}`} key={2}>
    <a href={data.image.url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={data.image.alt} />
    </a>
    <div className="description">{data.content}</div>
  </div>
);

export default Graphic;
