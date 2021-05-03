import React from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { ImageWithLoader, LoaderInline } from '../../components';
import image from './graphic.png';
import './Graphic.css';

const Graphic = ({ data, className }) => (
  <div className={`graphic ${className}`}>
    <div className="body">
      <ImageWithLoader cls="clickableImage" alt={data.image.alt} url={data.image.url} image={image} loader={<LoaderInline height="50" width="50" />} />
      <div className="description">
        <div className="project">{data.project}</div>
        <div className="infos">
          <div>{data.content}</div>
        </div>
      </div>
    </div>
    <div className="illustrations">
      <div className="empty" />
      <Link to="/illustrations" target="_blank">
        <i className="fa fa-eye">&nbsp;</i>
        {data.otherContent}
      </Link>
    </div>
  </div>
);

Graphic.propTypes = {
  data: PropTypes.exact({
    image: PropTypes.exact({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    content: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    otherContent: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Graphic;
