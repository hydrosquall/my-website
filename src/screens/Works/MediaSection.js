import React from "react";
import { ImageWithLoader, LoaderInline } from "../../components";
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
          <ImageWithLoader alt={m.title} image={buildVideoThumbnail(m.youtubeId)} loader={<LoaderInline height="50" width="50" />}/>
          <div className="media-info">
            <div>{m.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MediaSection;
