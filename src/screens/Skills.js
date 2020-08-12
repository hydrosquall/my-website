import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../components/Section";
import "./Skills.css";

const Skills = ({ data, onChangeVisibility }) => {
  const getFormattedContent = ({ content, highlight }) => {
    const [phrase1, phrase2] = content.split(highlight);
    const toHighlight = <span className="highlight-marker">{highlight}</span>;
    return [phrase1, toHighlight, phrase2];
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
