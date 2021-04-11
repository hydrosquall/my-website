import React from "react";
import { ImageWithLoader, LoaderInline } from "../../components";
import image from "./latestProject.png";

const Web = ({ data, className, id }) => (
  <div className={`web ${className}`} key={id}>
    <div className="body">
      <ImageWithLoader cls="clickableImage" alt={data.image.alt} url={data.image.url} image={image} loader={<LoaderInline height="50" width="50" />}/>
      <div className="description">
        <div className="project">{data.project}</div>
        <div className="infos">
          <div>{data.infos[0]}</div>
          <div>{data.infos[1]}</div>
        </div>
      </div>
    </div>
  </div>
);
export default Web;
