import React from "react";
import { Link } from "react-router-dom";
import "./Graphic.css";
import image from "./graphic.png";

const Graphic = ({ data, className, id }) => (
  <div className={`graphic ${className}`} key={id}>
    <a href={data.image.url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={data.image.alt} />
    </a>
    <div className="description">
      <div className="project">{data.content}</div>
      <div className="illustrations">
        <Link to="/illustrations" target="_blank">
          <i className={"fa fa-eye"}>&nbsp;</i>
          {data.otherContent}
        </Link>
      </div>
    </div>
  </div>
);

export default Graphic;
