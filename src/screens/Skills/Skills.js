import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../../components/Section";
import "./Skills.css";

const Skills = ({ data, onChangeVisibility }) => {
  const getFormattedContent = ({ content, highlight }) => {
    const [phrase1, phrase2] = content.split(highlight);
    const toHighlight = (
      <span className="highlight-marker" key={2}>
        {highlight}
      </span>
    );
    return [
      <div key={1}>{phrase1}</div>,
      toHighlight,
      <div key={3}>{phrase2}</div>,
    ];
  };
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
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

export default Skills;
