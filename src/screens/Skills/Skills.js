/* eslint-disable react/no-array-index-key */
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import * as PropTypes from 'prop-types';
import { Section } from '../../components';
import './Skills.css';

const Skills = ({ data, onChangeVisibility = () => {} }) => {
  const getFormattedContent = ({ content, highlight }) => {
    const [phrase1, phrase2] = content.split(highlight);
    return [phrase1, highlight, phrase2].map((text, index) => (
      <span key={index} className={index === 1 ? 'highlight-marker' : ''}>
        {text}
      </span>
    ));
  };
  return (
    <VisibilitySensor
      scrollCheck
      partialVisibility
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="Skills">
        {data.sectionItems.map((skill, index) => (
          <div className="skill" key={index}>
            {getFormattedContent(skill)}
          </div>
        ))}
      </Section>
    </VisibilitySensor>
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
};

export default Skills;
