import React from "react";

import "./Web.css";
const image = require("./latestProject.png");

const Web = ({ data, className, id }) => (
  <div className={`web ${className}`} key={id}>
    <a href={data.image.url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={data.image.alt} />
    </a>
    <div className="description">
      <div className="project">{data.content}</div>
      <div className="infos">
        <div>{data.infos[0]}</div>
        <div>{data.infos[1]}</div>
      </div>
    </div>
  </div>
);
export default Web;
