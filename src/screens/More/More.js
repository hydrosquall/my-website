import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import * as PropTypes from 'prop-types';
import { Section, ImageSection } from '../../components';

import './More.css';

const More = ({ data, onChangeVisibility = () => {} }) => (
  <VisibilitySensor
    scrollCheck
    partialVisibility
    onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
  >
    <Section title={data.title} id={data.id} className="More">
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
    </Section>
  </VisibilitySensor>
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
};

export default More;
