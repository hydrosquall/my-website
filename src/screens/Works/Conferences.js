import React from 'react';
import * as PropTypes from 'prop-types';
import { MediaSection } from '../../components';
import './Conferences.css';

const Conferences = ({
  data, media, className,
}) => (
  <div className={`conferences ${className}`}>
    <div className="body">
      <div className="description">
        <div className="project">{data.project}</div>
        <div className="infos">
          <div>{data.content}</div>
        </div>
      </div>
    </div>
    <MediaSection media={media} />
  </div>
);

Conferences.propTypes = {
  data: PropTypes.exact({
    content: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
  }),
  media: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      youtubeId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
  className: PropTypes.string,
};
export default Conferences;
