import React from "react";
import { Link } from "react-router-dom";
import image from "./graphic.png";
import './Graphic.css'

const Graphic = ({ data, className, id }) => (
  <div className={`graphic ${className}`} key={id}>
    <div className="body">
      <a href={data.image.url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={data.image.alt} />
      </a>
      <div className="description">
        <div className="project">{data.project}</div>
        <div className="infos">
          <div>{data.content}</div>
        </div>
      </div>
    </div>
    <div className="illustrations">
      <div className="empty"></div>
      <Link to="/illustrations" target="_blank">
        <i className={"fa fa-eye"}>&nbsp;</i>
        {data.otherContent}
      </Link>
    </div>
  </div>
);

export default Graphic;
