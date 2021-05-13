import React from 'react';
import * as PropTypes from 'prop-types';
import { SectionWithSensor, ImageSection } from '../../components';

import './More.css';

const More = ({ data, onChangeVisibility = () => {}, isVisible }) => (
  <SectionWithSensor onChangeVisibility={onChangeVisibility} id={data.id} className="More" title={data.title} isVisible={isVisible}>
    {data.sectionItems.map(
      ({ title, content, contentItems }) => (
        <div className="more" key={title}>
          <div className="more-title">{title}</div>
          {content && <div className="more-content">{content}</div>}
          {contentItems && (
          <div className="more-content-items">
            {contentItems.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="more-content-item">{item}</div>
            ))}
          </div>
          )}
        </div>
      ),
    )}
    <ImageSection />
  </SectionWithSensor>
);

More.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    sectionItems: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string.isRequired,
        content: PropTypes.string,
        contentItems: PropTypes.arrayOf(
          PropTypes.string,
        ),
      }),
    ),
  }),
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default More;
