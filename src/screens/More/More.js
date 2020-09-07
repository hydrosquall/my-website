import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../../components/Section";
import ImageSection from "../../components/ImageSection"

const More = ({ data, onChangeVisibility }) => {
  return (
    <VisibilitySensor
      scrollCheck={true}
      partialVisibility={true}
      onChange={(isVisible) => onChangeVisibility(isVisible, data.id)}
    >
      <Section title={data.title} id={data.id} className="More">
        {data.sectionItems.map(
          ({ title, content, contentItems = [] }, index) => (
            <div className="more" key={index}>
              {title}
              {content}
              {contentItems.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          )
        )}
        <ImageSection/>
      </Section>
    </VisibilitySensor>
  );
};

export default More;
