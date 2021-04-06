import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Section } from "../../components";
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
        <Web data={data.webDevelopment} className="work" id={1} />
        <Graphic data={data.graphic} className="work" id={2} />
        <Conferences
          data={data.conferences}
          media={media}
          className="work"
          id={3}
        />
      </Section>
    </VisibilitySensor>
  );
};

export default Works;
