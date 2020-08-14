import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../../components/Section";
import "./Works.css";

import Web from "./Web";
import Graphic from "./Graphic";

const Works = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="Works">
        <Web data={data.webDevelopment} className="work" />
        <Graphic data={data.graphic} className="work" />
        <div className="work" key={3}>
          {data.conferences}
        </div>
      </Section>
    </VisibilitySensor>
  );
};

export default Works;
