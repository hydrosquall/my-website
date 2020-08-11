import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../components/Section";
import "./Skills.css";

const Skills = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="Skills">
        {data.sectionItems.map((skill) => (
          <div className="skill">{skill}</div>
        ))}
      </Section>
    </VisibilitySensor>
  );
};

export default Skills;
