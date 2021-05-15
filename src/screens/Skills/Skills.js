/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as PropTypes from 'prop-types';
import { SectionWithSensor } from '../../components';
import { formatContent } from '../../service/utils';
import './Skills.css';

const Skills = ({ data, onChangeVisibility = () => {}, isVisible }) => (
  <SectionWithSensor onChangeVisibility={onChangeVisibility} id={data.id} title={data.title} className="Skills" isVisible={isVisible}>
    {data.sectionItems.map(({ content, highlight }, index) => (
      <div className="skill" key={index}>
        {formatContent(content, highlight, 'highlight-marker')}
      </div>
    ))}
  </SectionWithSensor>
);

Skills.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    sectionItems: PropTypes.arrayOf(
      PropTypes.exact({
        content: PropTypes.string.isRequired,
        highlight: PropTypes.string.isRequired,
      }),
    ),
  }),
  onChangeVisibility: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default Skills;
