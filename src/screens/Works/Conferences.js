import React from "react";
import MediaSection from "./MediaSection";

const Conferences = ({ data, media, className, id }) => (
  <div className={`conferences ${className}`} key={id}>
    {data}
    <MediaSection media={media}></MediaSection>
  </div>
);

export default Conferences;
