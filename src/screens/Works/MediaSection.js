import React from 'react';
import * as PropTypes from 'prop-types';
import { ImageWithLoader, LoaderInline } from '../../components';
import './MediaSection.css';

const MediaSection = ({ media }) => {
  const buildVideoUrl = (youtubeId) => `https://www.youtube.com/watch?v=${youtubeId}`;

  const buildVideoThumbnail = (youtubeId) => `http://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  return (
    <div className="MediaSection">
      {media.map(({ title, youtubeId }) => (
        <a
          className="media-item"
          key={title}
          href={buildVideoUrl(youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithLoader alt={title} image={buildVideoThumbnail(youtubeId)} loader={<LoaderInline height="50" width="50" />} />
          <div className="media-info">
            <div>{title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

MediaSection.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      youtubeId: PropTypes.string.isRequired,
      date: PropTypes.string,
    }),
  ),
};

export default MediaSection;
