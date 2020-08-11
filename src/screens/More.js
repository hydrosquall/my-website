import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../components/Section";

const More = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section {...data} />
    </VisibilitySensor>
  );
};

export default More;
