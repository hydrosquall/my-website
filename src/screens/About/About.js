import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import * as PropTypes from 'prop-types';
import { Section } from '../../components';

import './About.css';

const About = ({ data, onChangeVisibility = () => {} }) => (
  <VisibilitySensor
    scrollCheck
    partialVisibility
    onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
  >
    <Section id={data.id} className="About">
      <div className="item">
        <p>{data.content}</p>
      </div>
    </Section>
  </VisibilitySensor>
);

About.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    content: PropTypes.string.isRequired,
  }),
  onChangeVisibility: PropTypes.func,
};

export default About;
