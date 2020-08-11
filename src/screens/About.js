import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../components/Section";

const About = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="About">
        <div className="item">
          <div className="item-content">{data.content}</div>
        </div>
      </Section>
    </VisibilitySensor>
  );
};

export default About;
