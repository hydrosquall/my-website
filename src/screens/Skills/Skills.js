/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as PropTypes from 'prop-types';
import { SectionWithSensor } from '../../components';
import './Skills.css';

const Skills = ({ data, onChangeVisibility = () => {}, isVisible }) => {
  const getFormattedContent = ({ content, highlight }) => {
    const [phrase1, phrase2] = content.split(highlight);
    return [phrase1, highlight, phrase2].map((text, index) => (
      <span key={index} className={index === 1 ? 'highlight-marker' : ''}>
        {text}
      </span>
    ));
  };
  return (
    <SectionWithSensor onChangeVisibility={onChangeVisibility} id={data.id} title={data.title} className="Skills" isVisible={isVisible}>
      {data.sectionItems.map((skill, index) => (
        <div className="skill" key={index}>
          {getFormattedContent(skill)}
        </div>
      ))}
    </SectionWithSensor>
  );
};

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
