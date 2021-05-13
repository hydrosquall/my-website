import React from 'react';
import * as PropTypes from 'prop-types';
import { SectionWithSensor } from '../../components';

import './About.css';

const About = ({ data, onChangeVisibility = () => {}, isVisible }) => (
  <SectionWithSensor onChangeVisibility={onChangeVisibility} id={data.id} className="About" isVisible={isVisible}>
    <div className="item">
      <p>{data.content}</p>
    </div>
  </SectionWithSensor>
);

About.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    content: PropTypes.string.isRequired,
  }),
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default About;
