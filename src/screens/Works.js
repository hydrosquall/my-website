import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../components/Section";
import "./Works.css";

const Works = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="Works">
        {data.sectionItems.map((work, index) => (
          <div className="work" key={index}>
            {work.content}
          </div>
        ))}
      </Section>
    </VisibilitySensor>
  );
};

export default Works;
