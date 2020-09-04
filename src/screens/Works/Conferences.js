import React from "react";
import MediaSection from "./MediaSection";
import './Conferences.css';

const Conferences = ({ data, media, className, id }) => (
  <div className={`conferences ${className}`} key={id}>
    <div className="body">
      <div className="description">
        <div className="project">{data.project}</div>
        <div className="infos">
          <div>{data.content}</div>
        </div>
      </div>
    </div>
    <MediaSection media={media}></MediaSection>
  </div>
);

export default Conferences;
