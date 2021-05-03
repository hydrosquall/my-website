import React from 'react';
import * as PropTypes from 'prop-types';
import { ImageWithLoader, LoaderInline } from '../../components';
import image from './latestProject.png';

const Web = ({ data, className }) => (
  <div className={`web ${className}`}>
    <div className="body">
      <ImageWithLoader cls="clickableImage" alt={data.image.alt} url={data.image.url} image={image} loader={<LoaderInline height="50" width="50" />} />
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

Web.propTypes = {
  data: PropTypes.exact({
    image: PropTypes.exact({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    project: PropTypes.string.isRequired,
    infos: PropTypes.arrayOf(PropTypes.string),
  }),
  className: PropTypes.string,
};
export default Web;
