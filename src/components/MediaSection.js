import React from "react";
import "./MediaSection.css";

const MediaSection = ({ media }) => {
  const buildVideoUrl = youtubeId =>
    `https://www.youtube.com/watch?v=${youtubeId}`;

  const buildVideoThumbnail = youtubeId =>
    `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  return (
    <div className="MediaSection">
      {media.map((m, key) => (
        <a
          className="media-item"
          key={key}
          href={buildVideoUrl(m.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={buildVideoThumbnail(m.youtubeId)} alt="" />
          <div className="media-info">
            <div>{m.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MediaSection;
