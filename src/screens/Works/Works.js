import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../../components/Section";
import "./Works.css";

import Web from "./Web";
import Graphic from "./Graphic";
import Conferences from "./Conferences";

const Works = ({ data, media, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="Works">
        <Web data={data.webDevelopment} className="work" key={1} />
        <Graphic data={data.graphic} className="work" key={2} />
        <Conferences
          data={data.conferences}
          media={media}
          className="work"
          key={3}
        />
      </Section>
    </VisibilitySensor>
  );
};

export default Works;
