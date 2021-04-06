import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Section } from "../../components";

import "./About.css";

const About = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="About">
        <div className="item">
          <p>{data.content}</p>
        </div>
      </Section>
    </VisibilitySensor>
  );
};

export default About;
